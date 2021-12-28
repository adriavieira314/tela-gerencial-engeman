import { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt';

import './style.css';
import EngemanGerencial from "../Engeman";

registerLocale('pt', pt);

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
        search: '',
        startDate: new Date(),
      };
   }
  
   searchSpace(event) {
      event.stopPropagation();
      this.setState({search: event.target.value})
   }
   
   setandoData(data) {
      this.setState({startDate: data})
   }

   render() {
      return (
         <section className='main-section'>
            <div className='div-filter'>
               <div className="search-input">
                  <Form>
                     <Row>
                        <Col>
                           <Form.Control 
                              type="text" 
                              placeholder="Filtrar por OS, Nome, Matrícula" 
                              className="form-cadastro_input"
                              onChange={this.searchSpace.bind(this)} 
                           />
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                     </Row>
                  </Form>
               </div>
               <div>
                  <DatePicker
                     locale='pt'
                     dateFormat={'dd/MM/yyyy'}
                     selected={this.state.startDate} 
                     onChange={(date) => this.setandoData(date)}
                  />
               </div>
            </div>
            <EngemanGerencial searchWord={this.state.search} />
         </section>
      );
   }
    
}

export default SearchBar;