import React from 'react';
import './App.css';
import Card from "./components/Card.tsx";
import CardGrid from "./components/CardGrid.tsx";
function App() {
    return (
        <div className="container">
            <CardGrid></CardGrid>
        </div>
    );
}

export default App;