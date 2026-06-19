import React from 'react';
import { Sparkles } from 'lucide-react';

const categories = [
  '전체', '교회/신앙', '카페/음식점', '학원/교육', '쇼핑몰/커머스', 
  '뷰티/헤어', '부동산/인테리어', '행사/이벤트', 'IT/스타트업', '자율 템플릿'
];

function Header({ activeFilter, setActiveFilter }) {
  return (
    <header className="header glass-panel">
      <div className="header-title">
        <Sparkles size={28} color="#FF7E5F" />
        카드뉴스 스튜디오 v2
      </div>
      <div className="filter-tags">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`glass-button ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
