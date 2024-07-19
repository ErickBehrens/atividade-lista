import React, { useState } from 'react';
import IdeaList from './components/IdeaList';
import IdeaForm from './components/IdeaForm';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [currentIdea, setCurrentIdea] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addIdea = (idea) => {
    if (editIndex !== null) {
      const updatedIdeas = ideas.map((item, index) =>
        index === editIndex ? idea : item
      );
      setIdeas(updatedIdeas);
      setEditIndex(null);
    } else {
      setIdeas([...ideas, idea]);
    }
    setCurrentIdea('');
  };

  const removeIdea = (index) => {
    setIdeas(ideas.filter((_, i) => i !== index));
  };

  const editIdea = (index) => {
    setCurrentIdea(ideas[index]);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Lista de Ideias Culinárias</h1>
      <IdeaForm addIdea={addIdea} currentIdea={currentIdea} setCurrentIdea={setCurrentIdea} />
      <IdeaList ideas={ideas} removeIdea={removeIdea} editIdea={editIdea} />
    </div>
  );
}

export default App;