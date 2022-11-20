
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import './Components/Header';
import Header from './Components/Header';

function App() {
	return (
		<div className='App'>
         <Header />
         <Home />
         <Link/>
		</div>
	);
}

export default App;
