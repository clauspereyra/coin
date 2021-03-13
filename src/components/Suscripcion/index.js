import React, { useState } from 'react';
import './Suscripcion.css';
import SuscripcionSignup from './SuscripcionSignup';
import SuscripcionSuccess from './SuscripcionSuccess';

const Suscripcion = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='form-wrapper'>
    <div className='form-box'>
      <div className='form-container'>
        
        
        {!isSubmitted ? (
          <SuscripcionSignup submitForm={submitForm} />
        ) : (
          <SuscripcionSuccess />
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default Suscripcion;
