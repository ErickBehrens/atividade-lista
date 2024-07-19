import React from 'react';

function IdeaList({ ideas, removeIdea, editIdea }) {
  return (
    <ul>
      {ideas.map((idea, index) => (
        <li key={index}>
          {idea}
          <div>
            <button onClick={() => editIdea(index)}>Editar</button>
            <button onClick={() => removeIdea(index)}>Remover</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default IdeaList;