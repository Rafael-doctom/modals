import React, { useState } from 'react';

import Modal1 from './components/modal1';

function App() {

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const handleClick1 = (event) => {
    event.preventDefault()
    setModal1(!modal1)
  };

  const handleClick2 = (event) => {
    event.preventDefault()
    setModal2(!modal2)
  };

  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <button onClick={handleClick1}>Modal1</button>
        <button onClick={handleClick2}>Modal2</button>
        <button>Modal3</button>
        <button>Modal4</button>
        <button>Modal5</button>
        <button>Modal6</button>
        <button>Modal7</button>
        <button>Modal8</button>
        <button>Modal9</button>
        <button>Modal10</button>
      </div>

      {modal1 ? <Modal1 /> : null }

      {modal2 ?<Modal1 />: null }

    </>
  );
};

export default App;
