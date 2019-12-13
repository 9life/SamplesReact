// import Header from './Header';
// import Footer from './Footer';
import NavMenu from './NavMenu';
import React from 'react';
import DateTime from './DateTime';
// import TableHol from './TableHol';

export default function Layout(props)  {
        return (
            <div className="App grid">
                <header className="grid-item header">
                <DateTime />
                </header>

                <nav className="grid-item nav">
                    <NavMenu />
                </nav>

                <main className="grid-item main">
                    {/* <TableHol/> */}
                {props.children}
                </main>

                <footer className="grid-item footer">
                    <p>footer</p>
                </footer>
            </div>
        );
}