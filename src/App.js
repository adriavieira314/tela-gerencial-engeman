import { Component } from "react";

import "./assets/App.css";
import './assets/index.css';
import EngemanGerencial from "./components/Engeman";
import SearchBar from "./components/SearchBar";
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
        <SearchBar searchInput={this.searchSpace.bind(this)} />
        <EngemanGerencial dados={Dados} searchWord={this.state.search} />
      </main>
    );
  }
}

export default App;
