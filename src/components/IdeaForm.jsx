import React, { useState, useEffect } from 'react';

function IdeaForm({ addIdea, currentIdea, setCurrentIdea }) {
  const [idea, setIdea] = useState('');

  useEffect(() => {
    setIdea(currentIdea);
  }, [currentIdea]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idea) {
      addIdea(idea);
      setIdea('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova ideia culinária"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button type="submit">{currentIdea ? 'Editar' : 'Adicionar'}</button>
    </form>
  );
}

export default IdeaForm;