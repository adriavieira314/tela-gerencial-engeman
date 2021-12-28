import { Component } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
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
      this.dataFormatada = '';

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
      var dia = data.getDate().toString();
      var mes = (data.getMonth()+1).toString();
      var ano = data.getFullYear();
      this.dataFormatada = dia + '/' + mes + '/' + ano;
      console.log(typeof this.dataFormatada);
      this.setState({startDate: data})
   }

   render() {
      return (
         <section className='main-section'>
            <Container className="filtro_input">
               <Row>
                  <Col xs={9}>
                     <Form className='search-input'>
                        <Row>
                           <Col>
                              <Form.Control 
                                 type="text" 
                                 placeholder="Filtrar por OS, Nome, Matrícula" 
                                 onChange={this.searchSpace.bind(this)} 
                              />
                           </Col>
                           <Col></Col>
                           <Col></Col>
                           <Col></Col>
                        </Row>
                     </Form>
                  </Col>
                  <Col>
                     <DatePicker
                        className='date-picker'
                        locale='pt'
                        dateFormat={'dd/MM/yyyy'}
                        selected={this.state.startDate} 
                        onChange={(date) => this.setandoData(date)}
                     />
                  </Col>
               </Row>
            </Container>
            
            <EngemanGerencial searchWord={this.state.search} dataFormatada={this.dataFormatada} />
         </section>
      );
   }
    
}

export default SearchBar;