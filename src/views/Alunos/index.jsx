import "./alunos.css";
import { useState } from "react"

import { toast } from 'react-toastify';

export function Aluno(){
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [serie, setSerie] = useState('');
    const [msn, setMsn] = useState('');

    const validarCampos = (e) => {
        e.preventDefault()
        
    // nome
    if(nome ===""){
        toast("Precisa preencher o campo nome");
    }else if(sexo ==="" || sexo === "Selecione sexo"){
        toast("Precisa preencher o campo sexo");
    }else if(serie ===""){
        toast("Precisa preencher o campo serie");
    }else{
        toast("Parabéns, informações inseridas com sucesso")
    }
}

    return(
        <div>
            <div className="card mt-5">
                <div className="card-title">
                    <h2>Alunos</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        
                        <form onSubmit={validarCampos}>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" id="nome" className="form-control" placeholder="nome"
                                    onChange={ e => setNome(e.target.value)} value={nome}
                                    />
                                    <p style={{color: 'red'}}>{msn}</p>
                                </div>
                                <div className="col">
                                    <label htmlFor="sexo">Sexo</label>
                                    <select className="form-control" 
                                    id="sexo" value={sexo} onChange={ e => setSexo(e.target.value)}>
                                        <option value="x" selected>selecione sexo</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                    <p style={{color: 'red'}}>{msn}</p>
                                </div>
                                <div className="col">
                                    <label htmlFor="nome">Série</label>
                                    <input type="serie" id="Série" className="form-control" placeholder="serie"
                                    value={serie} onChange={ e=> setSerie(e.target.value)} />
                                    <p style={{color: 'red'}}>{msn}</p>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-outline-success btn-form">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                    <table className="table table-striped table-bordered mt-5">
                        <thead>
                            <tr>
                                <th width="100" className="text-center">código</th>
                                <th>Nome</th>
                                <th width="100" className="text-center">Sexo</th>
                                <th width="100" className="text-center">Série</th>
                                <th width="200" className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">01</td>
                                <td>Carlos Eduardo</td>
                                <td>Masculino</td>
                                <td>6º B</td>
                                <td className="text-center btn-table">
                                    <div className="btn btn-outline-warning">Editar</div>
                                    <div className="btn btn-outline-danger">Apagar</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">02</td>
                                <td>Matheus Costa</td>
                                <td>Masculino</td>
                                <td>9º B</td>
                                <td className="text-center btn-table">
                                    <div className="btn btn-outline-warning">Editar</div>
                                    <div className="btn btn-outline-danger">Apagar</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">03</td>
                                <td>Ana Júlia</td>
                                <td>Feminino</td>
                                <td>2º A</td>
                                <td className="text-center btn-table">
                                    <div className="btn btn-outline-warning">Editar</div>
                                    <div className="btn btn-outline-danger">Apagar</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}