import { Component } from "react";
import { Table } from 'react-bootstrap';

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
                        <th>Máquina</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dados.filter((data)=>{
                            if(this.props.searchWord == '')
                                return data
                            else if(
                                data.os.toLowerCase().includes(this.props.searchWord.toLowerCase()) || 
                                data.funcionarios.toLowerCase().includes(this.props.searchWord.toLowerCase()) || 
                                data.dataInicio.toLowerCase().includes(this.props.searchWord.toLowerCase())
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
                                <td>{item.maquina}</td>
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