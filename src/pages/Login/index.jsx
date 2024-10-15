import Senai from '../../assets/logoSenai.png'
import './style.css'
import Button from '../../components/Button'

export function Login(){

    {/*const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
          });
    
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); 
            navigate('/home'); 
          } else {
            alert('Email ou senha incorretos!');
          }
        } catch (error) {
          console.error('Erro ao tentar fazer login:', error);
          alert('Erro ao conectar com o servidor.');
        }
    };   */}


    return(
        <div className="container">

        <img src={Senai} alt="Logo Senai em azul e branco" />

        <h1>Login de Usuario</h1>

        <input className='form' 
        name='email' 
        type="text"
        placeholder='Digite seu email' />

        <input className='form'
        name='senha' 
        type="text"
        placeholder='Digite sua senha' />

        <Button className='button-custom' label='Entrar' variant='primary' size='large'/>

        </div>
    )
}