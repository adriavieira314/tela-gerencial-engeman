import { Component } from "react";
import { Table } from 'react-bootstrap';

import Dados from '../../assets/info-json';

class EngemanGerencial extends Component {
    render() {
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>OS</th>
                        <th>Hora Iniciada</th>
                        <th>Hora Finalizada</th>
                        <th>Total de Horas</th>
                        <th>Funcionários</th>
                        <th>Matricula</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Dados.filter((data)=>{
                            if(this.props.searchWord === '')
                                return data
                            else if(
                                data.os.toLowerCase().includes(this.props.searchWord.toLowerCase()) || 
                                data.funcionarios.toLowerCase().includes(this.props.searchWord.toLowerCase()) || 
                                data.matricula.toLowerCase().includes(this.props.searchWord.toLowerCase())
                            ){
                                return data
                            }
                        }).map((item, index) => (
                            <tr key={index}>
                                <td>{item.os}</td>
                                <td>{item.dataInicio}</td>
                                <td>{item.dataFim}</td>
                                <td>{item.totalHoras}</td>
                                <td>{item.funcionarios}</td>
                                <td>{item.matricula}</td>
                                <td>{item.descricao}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default EngemanGerencial;