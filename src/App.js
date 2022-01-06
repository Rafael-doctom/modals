import React, { useState } from 'react';

import Login from './pages';

function App() {

  const [modalLogin, setModalLogin] = useState(false);

  const [stateLogin, setStateLogin] = useState(false)

  const handleClick1 = (event) => {
    event.preventDefault()
    setModalLogin(!modalLogin)
    setStateLogin(!stateLogin)
  };

  
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '120px' }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick1}>
          {stateLogin ? 'x' : 'fazer login'}
        </button>
      </div>
      {modalLogin ? <Login /> : null}
    </>
  );
};

export default App;
