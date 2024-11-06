import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.css';

export default function Table() {

    const [itens, setItens] = useState([])
 
  
    useEffect(() => {
      fetch("http://localhost:8080/").then((resp)=>{
            return resp.json();
      }).then((resp)=>{
            setItens(resp)
            console.log(resp)
      }).catch((error)=>{
            console.log(error)
      })
    }, [])
  
    const deletar = (id) =>{
        fetch(`http://localhost:8080/${id}`,{
            method:"delete"
        }).then(()=>{
            window.location = "/"
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div className="tabela">
            <table border={1}>
                <thead className="head">
                <tr>
                    <th>Componente</th><th>Estoque</th><th>Fornecedor</th><th>Local Armazenamento</th><th></th><th></th>
                </tr>
                </thead>
                <tbody className="body">
                    {itens.map((item)=>(
                        <tr key={item.codigo}>
                            <td>{item.tittulo}</td>
                            <td>{item.estoque}</td>
                            <td>{item.fornecedor}</td>
                            <td>{item.localArmazenamento}</td>
                            <td>
                                <Link to={`/editar/${item.codigo}`}>Editar</Link>
                                <button onClick={deletar.bind(this, item.codigo)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}