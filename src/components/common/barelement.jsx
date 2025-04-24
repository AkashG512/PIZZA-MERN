import React from 'react';

const Barelement = ({ text, image }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      {image && <img src={image} alt="Barelement Image" className="mb-2" />}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Barelement;