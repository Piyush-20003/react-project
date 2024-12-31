import React from 'react';

function ButtonComponent({ text, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;
