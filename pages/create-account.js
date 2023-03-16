import React from 'react';
import Layout from './Layout';
import { Formulario, Campo, InputSubmit, Title, Error } from '@/components/ui/Formulario';

// Validaciones
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validacion/validateCreateAccount';

const STATE_INICIAL = {
  name: '',
  email: '',
  password: ''
};

const CreateAccount = () => {

  const { valores, errores, handleSubmit, handleChange } = useValidation(STATE_INICIAL, validateCreateAccount, createAccount )

  const { name, email, password } = valores;

  function createAccount() {
    console.log('Creating Account');
  }

  return (
    <div>
      <Layout>
        <>
          <Title>Create Account</Title>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >

            {errores.name && <Error>{errores.name}</Error>}
            {errores.email && <Error>{errores.email}</Error>}
            {errores.password && <Error>{errores.password}</Error>}
  
            <Campo>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                id='name'
                placeholder='Your Name'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </Campo>
  
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type='text'
                id='email'
                placeholder='Your Email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </Campo>
  
            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type='password'
                id='password'
                placeholder='Your Password'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </Campo>
  
            <InputSubmit
              type="submit"
              value="Create Account"
            />
  
          </Formulario>
        </>
      </Layout>
    </div>
  )
}
 
export default CreateAccount;
