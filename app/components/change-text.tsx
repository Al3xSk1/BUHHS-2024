import React, { useState } from 'react';

const ChangeText: React.FC = () => {
  const [text, setText] = useState<string>('Initial Text');

  const handleClick = () => {
    setText('New Text');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
};

export default ChangeText;
