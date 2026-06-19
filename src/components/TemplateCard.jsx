import React from 'react';

function TemplateCard({ template, onSelect }) {
  return (
    <div className="template-card glass-panel hover-scale">
      <img src={template.previewImage} alt={template.title} className="card-image-preview" />
      
      <div className="card-header">
        <h3 className="card-title">{template.title}</h3>
        <span className="card-id">{template.id}</span>
      </div>
      
      <p className="card-desc">{template.description}</p>
      
      <div className="card-tags">
        {template.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <div className="color-palette">
        {template.colors.map((color, idx) => (
          <div key={idx} className="color-swatch" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      
      <button className="card-action" onClick={onSelect}>
        이 템플릿으로 만들기
      </button>
    </div>
  );
}

export default TemplateCard;
