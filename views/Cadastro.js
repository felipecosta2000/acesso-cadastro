import React, {useState} from 'react';
import Swal from 'sweetalert2';
import AuthService from '../services/AuthService';


const Cadastro = () => {

    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const handleCadastrar = async (e) => {
        e.preventDefault();
        try{
            await AuthService.save(name, email, password);
            Swal.fire('Success', 'Cadastro de usuario com sucesso!', 'success');
        }catch(error){
            Swal.fire('Error', 'Erro no Cadastro...', 'error');
        }
    }

    return(
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleCadastrar}>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Cadastrar</button>
                <p>Ja tem Cadastro? <a href='/login'>Faça o Login</a></p>
            </form>
        </div>
    );

}

export default Cadastro;