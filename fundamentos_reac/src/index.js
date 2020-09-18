import React from 'react';
import ReactDOM from 'react-dom';
import Aleatorio from './components/basic/Aleatorio';
import Familia from './components/basic/Familia';
import FamiliaMembro from './components/basic/FamiliaMembro';
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProduto from './components/repeticao/TabelaProduto';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';
import "./index.css";


ReactDOM.render(
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Aula 36-37 - Desafio números Mega Sena" color="#7cd084">
                <Mega></Mega>
            </Card>

            <Card titulo="Aula 34 - Contador" color="#c89ef6">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="Aula 33 - Componente Controlado" color="rgba(208,184,124,1)">
                <Input></Input>
            </Card>

            <Card titulo="Aula 31 - Comunicação Indireta" color="rgba(154,114,157,1)">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="Aula 30 - Comunicação Direta" color="#F67280">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="Aula 27 - Renderização condicional" color="#F8B195">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
                {/*NOTE NÃO FUNCIONA <UsuarioInfo usuario={{email: "leonardo@gmail.com"}}></UsuarioInfo> */}
            </Card>

            <Card titulo="Aula 25-26 - Desafio Repetição" color="rgba(113,249,154,1)">
                <TabelaProduto></TabelaProduto>
            </Card>

            <Card titulo="Aula 24 - Repetição" color="#021859">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Aula 23 - Componente com Filhos" color="#F67280">
                <Familia sobreNome="Ferreira">
                    <FamiliaMembro nome="Leonardo" />
                    <FamiliaMembro nome="Júlia" />
                    <FamiliaMembro nome="Pedro" />
                </Familia>
            </Card>

            <Card titulo="Aula 19 - Desafio Aleatório" color="#F8B195">
                <Aleatorio min={1} max={60} />
            </Card>
        </div>
    </div>,
    document.getElementById('root'));