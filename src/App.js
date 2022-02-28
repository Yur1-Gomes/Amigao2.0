import React, { Component } from "react";
import "./App.css";
import logo from "./assets/petlogo.png";
import golden from "./assets/golden-retriever.jpg";
import pitbull from "./assets/pitbull.jpg";
import caramelo from "./assets/vira-lata.jpg";
import angora from "./assets/angora.jpg";
import persa from "./assets/persa.jpg";
import siames from "./assets/siames.jpg";
import face from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";


export default class App extends Component {
  state = {
    dogs: [
      {img:golden, name: "Túlio", breed: "Golden Retriever", age: "5 anos" },
      {img:pitbull, name: "Pipoca", breed: "Pitbull", age: "9 anos" },
      {img:caramelo, name: "Spike", breed: "Vira-lata caramelo", age: "2 anos" }
    ],
    cats: [
      {img:angora, name: "Oliver", breed: "Angorá", age: "10 anos" },
      {img:persa, name: "Lola", breed: "Persa", age: "12 anos" },
      {img:siames, name: "Bella", breed: "Siamês", age: "7 anos" }
    ],
    list: []
  };

  dogList = () => {
    this.setState({
      list: this.state.dogs.map((item) => (
        <div className="dogs">
          <img src={item.img} alt="cachorro"/>
          <h2>Nome: {item.name}</h2>
          <h2>Raça: {item.breed}</h2>
          <h2>Idade: {item.age}</h2>
          <button>Adotar</button>
        </div>
      ))
    });
  };

  catList = () => {
    this.setState({
      list: this.state.cats.map((item) => (
        <div className="cats">
          <img src={item.img} alt="gato"/>
          <h2>Nome: {item.name}</h2>
          <h2>Raça: {item.breed}</h2>
          <h2>Idade: {item.age}</h2>
          <button>Adotar</button>
        </div>
      ))
    });
  };

  render() {
    return (
      <div className="body">
        <header>
          <section className="top-bar">
            <div className="title">
              <h3>AMIGÃO</h3>
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <ul>
                <li>Home</li>
                <li>Quem somos</li>
                <li>Notícias</li>
                <li>Adote um Amigo</li>
              </ul>
            </nav>
          </section>
        </header>
        <main>
          <h2>Escolha seu novo melhor amigo!</h2>
          <div className="buttons">
          <button onClick={this.dogList}className="dog-button">Cachorros</button>
          <button onClick={this.catList}className="cat-button">Gatos</button>
          </div>
          <div className="list">{this.state.list}</div>
        </main>
        <footer>
          <section className="container-bottom">
            <div className="social">
              <img src={face} alt="facebook"/>
              <img src={insta} alt="instagram"/>
              <img src={twitter} alt="twitter"/>
            </div>
                  <div className="bottom-box">
                    <div className="disclaimer">
                      <p>Layout produzido por um estudante do Vai na Web para fins exclusivamente educacionais.</p>
                    </div>
                  </div>
                </section>
              </footer>
            </div>
            );
  }
}