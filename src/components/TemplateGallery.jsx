import React from 'react';
import TemplateCard from './TemplateCard';

function TemplateGallery({ templates, onSelect }) {
  return (
    <div className="gallery-grid">
      {templates.map(template => (
        <TemplateCard 
          key={template.id} 
          template={template} 
          onSelect={() => onSelect(template)} 
        />
      ))}
    </div>
  );
}

export default TemplateGallery;
