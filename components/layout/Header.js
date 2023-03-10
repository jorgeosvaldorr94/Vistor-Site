import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import Boton from '../ui/Boton';

const StyledHeader = styled.header`
  border-bottom: 4px solid var(--gris3);
  padding: 1rem 0;
`;

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;
const Parrafo = styled.p`
    color: var(--gris1);
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Great = styled.div`
    display: flex;
    align-items: center;
`;

const LeftPanel = styled.div`
    display: flex;
    align-items: center;
`;

const Header = () => {

    const usuario = true;

    return ( 
        <StyledHeader>
            <ContenedorHeader>
                <LeftPanel>
                    <Link href='/'>
                        <Logo>P</Logo>
                    </Link>

                    {/* Buscador aquí */}
                    <Buscar/>

                    {/* Navegacion Aqui */}
                    <Navegacion/>
                </LeftPanel>

                <Great>
                    {usuario
                        ?
                            (
                                <>
                                    {/* Menu de administration */ }
                                    <Parrafo>Hello: Cliente</Parrafo>
                                    <Boton bgColor='true'>
                                        <Link href="/">Logout</Link>
                                    </Boton>
                                </>
                            )
                        : 
                            (
                                <>
                                    {/* Menu de administration */ }
                                    <Boton bgColor='true'>
                                        <Link href="/">Login</Link>
                                    </Boton>

                                    <Boton>
                                        <Link href="/">Create Account</Link>
                                    </Boton>
                                </>
                            )
                    }

                </Great>
            </ContenedorHeader>
        </StyledHeader>
     );
}
 
export default Header; 

