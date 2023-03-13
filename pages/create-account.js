import React from 'react';
import Layout from './Layout';
import { Formulario, Campo, InputSubmit, Title } from '@/components/ui/Formulario';


const CreateAccount = () => (
  <div>
    <Layout>
      <>
        <Title>Create Account</Title>
        <Formulario>

          <Campo>
            <label htmlFor="name">Name</label>
            <input
              type='text'
              id='name'
              placeholder='Your Name'
              name='name'
            />
          </Campo>

          <Campo>
            <label htmlFor="email">Email</label>
            <input
              type='text'
              id='email'
              placeholder='Your Email'
              name='email'
            />
          </Campo>

          <Campo>
            <label htmlFor="password">Password</label>
            <input
              type='password'
              id='password'
              placeholder='Your Password'
              name='password'
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
 
export default CreateAccount;
