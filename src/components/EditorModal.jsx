import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { Download, X, Image as ImageIcon, Wand2, Copy, Check, Type } from 'lucide-react';
import { generateCopy } from '../data/copywriting';

const fontOptions = [
  { value: "'Noto Sans KR', sans-serif", label: "본고딕 (Noto Sans)" },
  { value: "'Nanum Gothic', sans-serif", label: "나눔고딕" },
  { value: "'Nanum Myeongjo', serif", label: "나눔명조" },
  { value: "'Gowun Dodum', sans-serif", label: "고운돋움" },
  { value: "'Jua', sans-serif", label: "배민 주아체" },
  { value: "'Do Hyeon', sans-serif", label: "배민 도현체" },
  { value: "'Black Han Sans', sans-serif", label: "검은고딕" },
];

// Helper to convert hex + opacity to rgba
const hexToRgba = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};

function EditorModal({ template, onClose }) {
  // Ensure overlay defaults exist if not present in template
  const initialData = {
    overlayEnabled: false,
    overlayColor: '#000000',
    overlayOpacity: 50,
    ...template.defaultData
  };
  
  const [data, setData] = useState(initialData);
  const [customBg, setCustomBg] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [feedText, setFeedText] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [scale, setScale] = useState(1);
  const [activeTab, setActiveTab] = useState('text');
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      if (screenWidth < 1024) {
        const maxWidth = screenWidth - 40;
        const maxHeight = screenHeight * 0.35; // Canvas takes max 35% of screen height
        
        const size = Math.min(maxWidth, maxHeight);
        setScale(size / 500);
      } else {
        setScale(1);
      }
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCustomBg(imageUrl);
    }
  };

  const handleAutoGenerate = () => {
    const copy = generateCopy(template.category);
    setData(prev => ({
      ...prev,
      title: copy.title,
      mainText: copy.mainText,
      subText: copy.subText
    }));
    setFeedText(copy.feedText);
    setHashtags(copy.hashtags);
  };

  const handleCopyFeed = () => {
    const textToCopy = `${feedText}\n\n${hashtags}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
      });
      
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement('a');
      link.download = `${data.title || 'cardnews'}_${Date.now()}.png`;
      link.href = image;
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
      alert("이미지 다운로드 중 오류가 발생했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-panel">
        <button className="modal-close" onClick={onClose}>
          <X size={24} color="#1d1d1f" />
        </button>
        
        <div className="editor-sidebar" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 0 }}>
          {/* Tabs Navigation */}
          <div className="editor-tabs" style={{ display: 'flex', borderBottom: '1px solid #eee', background: 'rgba(255,255,255,0.95)' }}>
            {[
              { id: 'bg', label: '배경/효과', icon: <ImageIcon size={18} /> },
              { id: 'text', label: '텍스트', icon: <Type size={18} /> },
              { id: 'feed', label: '피드/해시태그', icon: <Wand2 size={18} /> }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 10px',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '2px solid #1d1d1f' : '2px solid transparent',
                  color: activeTab === tab.id ? '#1d1d1f' : '#888',
                  fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {tab.icon}
                <span style={{ fontSize: '12px' }}>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Scrollable Tab Content */}
          <div className="tab-content-area" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
            
            {activeTab === 'bg' && (
              <div className="tab-pane">
                <div className="section-title">배경 이미지</div>
                <div className="form-group">
                  <button 
                    className="file-upload-btn"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <ImageIcon size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    내 PC에서 이미지 업로드
                  </button>
                  <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </div>

                <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '20px' }}>
                  가독성 박스 (Overlay)
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 'normal', fontSize: '13px', marginLeft: 'auto' }}>
                    <input type="checkbox" name="overlayEnabled" checked={data.overlayEnabled} onChange={handleChange} style={{ marginRight: '6px' }} />
                    사용하기
                  </label>
                </div>
                {data.overlayEnabled && (
                  <div className="form-group" style={{ background: 'rgba(255,255,255,0.4)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.6)' }}>
                    <div className="form-row" style={{ alignItems: 'center', marginBottom: '10px' }}>
                      <span className="form-label" style={{ margin: 0, width: '40px' }}>색상</span>
                      <input type="color" name="overlayColor" value={data.overlayColor} onChange={handleChange} className="color-picker" style={{ width: '40px' }} />
                    </div>
                    <div className="form-row" style={{ alignItems: 'center' }}>
                      <span className="form-label" style={{ margin: 0, width: '40px' }}>투명도</span>
                      <input type="range" name="overlayOpacity" min="0" max="100" value={data.overlayOpacity} onChange={handleChange} style={{ flexGrow: 1 }} />
                      <span style={{ fontSize: '12px', width: '30px', textAlign: 'right' }}>{data.overlayOpacity}%</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'text' && (
              <div className="tab-pane">
                <div className="section-title">태그 / 카테고리</div>
                <div className="form-group">
                  <input type="text" name="title" value={data.title} onChange={handleChange} className="form-input" />
                </div>
                
                <div className="section-title">메인 텍스트</div>
                <div className="form-group">
                  <textarea name="mainText" value={data.mainText} onChange={handleChange} className="form-textarea" />
                  <div className="form-row">
                    <select name="mainFont" value={data.mainFont} onChange={handleChange} className="form-select">
                      {fontOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    <input type="color" name="mainColor" value={data.mainColor} onChange={handleChange} className="color-picker" />
                  </div>
                  <div className="form-row" style={{ alignItems: 'center' }}>
                    <span className="form-label" style={{ margin: 0, width: '40px' }}>크기</span>
                    <input type="range" name="mainSize" min="20" max="100" value={data.mainSize} onChange={handleChange} style={{ flexGrow: 1 }} />
                    <span style={{ fontSize: '12px', width: '30px', textAlign: 'right' }}>{data.mainSize}px</span>
                  </div>
                </div>
                
                <div className="section-title">서브 텍스트</div>
                <div className="form-group">
                  <textarea name="subText" value={data.subText} onChange={handleChange} className="form-textarea" style={{ minHeight: '60px' }} />
                  <div className="form-row">
                    <select name="subFont" value={data.subFont} onChange={handleChange} className="form-select">
                      {fontOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    <input type="color" name="subColor" value={data.subColor} onChange={handleChange} className="color-picker" />
                  </div>
                  <div className="form-row" style={{ alignItems: 'center' }}>
                    <span className="form-label" style={{ margin: 0, width: '40px' }}>크기</span>
                    <input type="range" name="subSize" min="10" max="60" value={data.subSize} onChange={handleChange} style={{ flexGrow: 1 }} />
                    <span style={{ fontSize: '12px', width: '30px', textAlign: 'right' }}>{data.subSize}px</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feed' && (
              <div className="tab-pane">
                <button className="magic-btn" onClick={handleAutoGenerate} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
                  <Wand2 size={20} />
                  마케팅 문구 자동 완성
                </button>

                {(feedText || hashtags) && (
                  <div className="feed-preview-box" style={{ background: 'rgba(255,255,255,0.5)', padding: '15px', borderRadius: '12px', marginBottom: '20px', fontSize: '13px', lineHeight: '1.5' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>인스타 피드 본문 & 해시태그</div>
                    <div style={{ whiteSpace: 'pre-wrap', color: '#555', marginBottom: '10px' }}>
                      {feedText}
                    </div>
                    <div style={{ color: '#0066cc' }}>
                      {hashtags}
                    </div>
                    <button 
                      onClick={handleCopyFeed}
                      style={{ marginTop: '10px', width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      {isCopied ? <Check size={16} color="green" /> : <Copy size={16} />}
                      {isCopied ? '복사 완료!' : '복사하기'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Fixed Bottom Bar for Download */}
          <div className="editor-bottom-bar" style={{ padding: '15px 20px', background: 'white', borderTop: '1px solid #eee' }}>
            <button className="download-btn" onClick={handleDownload} disabled={isDownloading} style={{ margin: 0, width: '100%' }}>
              <Download size={20} />
              {isDownloading ? '저장 중...' : '이미지로 저장'}
            </button>
          </div>
        </div>
        
        <div className="editor-canvas-container">
          <div className="canvas-scale-wrapper" style={{
            width: scale < 1 ? 500 * scale : 500,
            height: scale < 1 ? 500 * scale : 500,
            position: 'relative',
            flexShrink: 0
          }}>
            <div 
              className="canvas-element" 
              ref={canvasRef}
              style={{
                ...template.canvasStyles,
                backgroundImage: customBg ? `url(${customBg})` : template.canvasStyles.backgroundImage,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                position: scale < 1 ? 'absolute' : 'relative',
                top: 0,
                left: 0,
                margin: 0
              }}
            >
              {/* The Overlay Box */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                padding: '40px',
                backgroundColor: data.overlayEnabled ? hexToRgba(data.overlayColor, data.overlayOpacity) : 'transparent',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}>
                {data.title && <div className="canvas-tag" style={{ position: 'relative', top: 0, left: 0, margin: '0 auto 20px auto', display: 'inline-block' }}>{data.title}</div>}
                
                <div 
                  className="canvas-main-text"
                  style={{
                    position: 'relative', top: 0, left: 0, transform: 'none',
                    width: '100%',
                    fontFamily: data.mainFont,
                    fontSize: `${data.mainSize}px`,
                    color: data.mainColor,
                    whiteSpace: 'pre-wrap',
                    textAlign: 'center',
                    marginBottom: data.subText ? '20px' : '0'
                  }}
                >
                  {data.mainText}
                </div>
                
                {data.subText && (
                  <div 
                    className="canvas-sub-text"
                    style={{
                      position: 'relative', bottom: 0, left: 0, transform: 'none',
                      width: '100%',
                      fontFamily: data.subFont,
                      fontSize: `${data.subSize}px`,
                      color: data.subColor,
                      whiteSpace: 'pre-wrap',
                      textAlign: 'center'
                    }}
                  >
                    {data.subText}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorModal;
