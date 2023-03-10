import React from 'react';
import { Global, css } from '@emotion/react';
import Header from './Header';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: 'PT Sans', serif;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }
          h3 {
            font-family: 'PT Sans', serif;
            font-weight: 700;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />

      <Head>
        <html lang="en"/>
        <title>Product Hunt Firebase y Next.js</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />

        <link href='/static/css/app.css' rel="stylesheet" />

      </Head>

      <Header />

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
/*
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  :root {
    --gris: #3d3d3d;
    --gris2: #6f6f6f;
    --naranja: #da552f;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.5;
  }
  h1, h2, h3 {
    margin: 0 0 2rem 0;
    line-height: 1.5;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

const Layout = (props) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
*/