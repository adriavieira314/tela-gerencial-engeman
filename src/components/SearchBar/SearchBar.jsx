import { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './style.css';

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.texto = '';
   }

   _handleMudancaTexto(event) {
      event.stopPropagation();
      this.texto = event.target.value;
      this.props.searchInput(this.texto);
   }

   render() {
      return (
         <Form className="search-input">
          <Row>
            <Col>
              <Form.Control 
                type="text" 
                placeholder="Filtrar por OS, Funcionário, Data" 
                className="form-cadastro_input"
                onChange={this._handleMudancaTexto.bind(this)} 
              />
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form>
      );
   }
    
}

export default SearchBar;