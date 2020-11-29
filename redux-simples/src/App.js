import React, { useState } from 'react';
import './App.css';
import Media from "./components/media/Media";
import Soma from "./components/soma/Soma";
import Sorteio from "./components/sorteio/Sorteio";
import Intervalo from "./components/intervalo/Intervalo"

function App() {
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(10);

	return (
		<div className="App">
			<h1>Exercícios React-Redux</h1>
			<div className="linha">
				<Intervalo min={min} max={max} onMinChange={setMin} onMaxChange={setMax}></Intervalo>
			</div>
			<div className="linha">
				<Media min={min} max={max}></Media>
				<Soma min={min} max={max}></Soma>
				<Sorteio min={min} max={max}></Sorteio>
			</div>
		</div>
	);
}

export default App;
