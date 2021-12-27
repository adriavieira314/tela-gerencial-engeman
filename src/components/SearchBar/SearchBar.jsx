import { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import './style.css';
import EngemanGerencial from "../Engeman";

class SearchBar extends Component {
   // constructor(props) {
   //    super(props);
   //    this.texto = '';
   // }

   // _handleMudancaTexto(event) {
   //    event.stopPropagation();
   //    this.texto = event.target.value;
   //    this.props.searchInput(this.texto);
   // }

   constructor() {
      super();
  
      this.state = {
        search: ''
      };
   }
  
   searchSpace(event) {
      event.stopPropagation();
      this.setState({search: event.target.value})
   }

   render() {
      return (
         <>
            <Form className="search-input">
               <Row>
                  <Col>
                  <Form.Control 
                     type="text" 
                     placeholder="Filtrar por OS, Funcionário, Data" 
                     className="form-cadastro_input"
                     onChange={this.searchSpace.bind(this)} 
                  />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
               </Row>
            </Form>
            <EngemanGerencial searchWord={this.state.search} />
         </>
      );
   }
    
}

export default SearchBar;