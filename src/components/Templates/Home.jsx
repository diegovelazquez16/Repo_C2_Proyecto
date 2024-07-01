import React from 'react';
import Header from '../Organisms/Header';
import MainContent from '../Organisms/MainContent';
import Sidebar from '../Organisms/Sidebar';
import Footer from '../Organisms/Footer';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <h1>Más destacados</h1>
                <div className="container">
                    <MainContent />
                    <Sidebar />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;