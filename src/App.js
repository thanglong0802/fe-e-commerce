import React from "react";
import "./App.css";
import Category from "./components/category/Category";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <main>
        <div className="container">
          <div className="category-content">
            <Category />
            <Content />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
