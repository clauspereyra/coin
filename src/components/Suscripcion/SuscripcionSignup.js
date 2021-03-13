import React from 'react';
import validate from './validateInfo';
import useForm from './useSuscripcion';
import './Suscripcion.css';

const SuscripcionSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>SUSCRIPCIÓN<br/><span>A NUESTRO NEWSLETTER</span></h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Nombre'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Correo Electrónico</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Correo Electrónico'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        
      </form>
    </div>
  );
};

export default SuscripcionSignup;
