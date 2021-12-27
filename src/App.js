import { Component } from "react";
  import { Route, Routes } from 'react-router-dom';

import "./assets/App.css";
import './assets/index.css';
import EngemanGerencial from "./components/Engeman";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/navbar";
import Dados from './assets/info-json';

class App extends Component {
  constructor() {
    super();

    this.state={
      search: ''
    };
  }

  searchSpace(texto) {
    this.setState({search: texto})
  }

  render() {
    return (
      <main>
        <NavBar />
        <Routes>                
          <Route path='/tela-gerencial-engeman' exact element={<SearchBar />}/>            
          <Route path='/engeman' element={<SearchBar />}/>            
        </Routes>
        {/* 
        <SearchBar searchInput={this.searchSpace.bind(this)} />
        <EngemanGerencial dados={Dados} searchWord={this.state.search} /> */}
      </main>
    );
  }
}

export default App;
