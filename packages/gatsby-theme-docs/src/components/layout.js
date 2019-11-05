import React from 'react';

const Layout = ({children}) => (
  <React.fragment>
    <header>gatsby-theme-docs</header>
    <main>{children}</main>
  </React.fragment>
)

export default Layout;
