import React from 'react';
import './App.css';
import logo from './assets/logo.jpeg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo da Loja" className="logo-img" />
        </div>
        <nav className="nav">
          <ul className="nav-desktop-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <div className="icons">
            <a href="#"><i className="fas fa-search"></i></a>
            <a href="#"><i className="fas fa-user"></i></a>
            <a href="#"><i className="fas fa-shopping-cart"></i></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="welcome-section">
          <h2>Mensagem de boas-vindas</h2>
          <p>textotextotextotexto.</p>
        </section>

        <section className="highlights">
          <h2>Destaques</h2>
          <div className="products">
            <div className="product">
              <span className="discount">-20% OFF</span>
              <p>Produto de exemplo</p>
              <p className="price">R$96,00 <span className="old-price">R$120,00</span></p>
            </div>
            <div className="product">
              <p>Produto de exemplo</p>
              <p className="price">R$122,00</p>
            </div>
            <div className="product">
              <p>Produto de exemplo</p>
              <p className="price">R$320,00</p>
            </div>
            <div className="product">
              <p>Produto de exemplo</p>
              <p className="price">R$420,00</p>
            </div>
          </div>
        </section>

        <section className="categories">
          <h2>Categorias</h2>
          <div className="category-list">
            <div className="category">
              <p>Categoria 1</p>
            </div>
            <div className="category">
              <p>Categoria 2</p>
            </div>
            <div className="category">
              <p>Categoria 3</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
        <p>
          Ao navegar por este site <strong>você aceita o uso de cookies</strong> para agilizar a sua experiência de compra. 
          <a href="#">Entendi</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
