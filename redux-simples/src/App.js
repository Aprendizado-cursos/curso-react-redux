
import './App.css';
import Card from "./components/card/Card";
import Intervalo from "./components/intervalo/Intervalo"

function App() {
	return (
		<div className="App">
			<h1>Exercícios React-Redux</h1>
			<div className="linha">
				<Intervalo></Intervalo>
			</div>
			<div className="linha">
				<Card title="Card 2" green>X</Card>
				<Card title="Card 3" blue>Y</Card>
				<Card title="Card 4" purple>X</Card>
			</div>
		</div>
	);
}

export default App;
