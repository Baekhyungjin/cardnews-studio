import React, { useState } from 'react';
import Header from './components/Header';
import TemplateGallery from './components/TemplateGallery';
import EditorModal from './components/EditorModal';
import { templates } from './data/templates';

function App() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [editingTemplate, setEditingTemplate] = useState(null);

  const filteredTemplates = activeFilter === '전체' 
    ? templates 
    : templates.filter(t => t.category === activeFilter);

  return (
    <div className="app-container">
      <Header activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <TemplateGallery 
        templates={filteredTemplates} 
        onSelect={(template) => setEditingTemplate(template)} 
      />
      
      {editingTemplate && (
        <EditorModal 
          template={editingTemplate} 
          onClose={() => setEditingTemplate(null)} 
        />
      )}
    </div>
  );
}

export default App;
