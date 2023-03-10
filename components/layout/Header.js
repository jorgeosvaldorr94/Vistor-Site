import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from 'styled-components';
import { jsx, css } from '@emotion/react';

const StyledHeader = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
  width: 100%;
`;

const Header = () => {
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <div>
                <div>
                    <p>P</p>

                    {/* Buscador aquí */}
                    <Buscar/>

                    {/* Navegacion Aqui */}
                    <Navegacion/>
                </div>

                <div>
                    {/* Menu de administration */}
                    <p>Hola: Cliente</p>

                    <button type='button'>Cerrar Sesión</button>

                    <Link href="/">Login</Link>
                    <Link href="/">Crear Cuenta</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
