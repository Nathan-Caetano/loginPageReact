import { useState } from 'react'
import '../auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} style={{ color: "#41456C", }} />
const PasswordEye = () => <FontAwesomeIcon icon={faEye} style={{ color: "#41456c", }} />
const PasswordSlashEye = () => <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#41456c", }} />

const initialState = {
  email: '',
  senha: '',
  shouldShowError: false,
  shouldShowPassword: false,
  isLoged: false,
  errorMensagem: '',
};

function Login () {
    const navigate = useNavigate();

    const [localState, setLocalState] = useState(initialState);

    const handleLocalState = (key, value) => {
      setLocalState(prev => ({ ...prev, [key]: value}))
    };
  
    const togglePassword = () => {
      handleLocalState('shouldShowPassword', !localState.shouldShowPassword);
    };
  
    const isFormValid = () => {
      return localState.email && localState.senha
    };
  
    const logar =  async (e) => {
      e.preventDefault();
      handleLocalState('shouldShowError', !isFormValid());
      if(!isFormValid()) {
        return
      }

      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: localState.email,
            senha: localState.senha,
          }),
        });
    
        if (!response.ok) {
          if (response.status === 401) {
            handleLocalState('errorMensagem', 'Email ou senha inválidos')
          }else {
            throw new Error('Erro ao fazer login');
          }
          return
        }
    
        const data = await response.json();
    
        console.log(data.usuario);
    
        localStorage.setItem('isLoged', 'true');
    
        navigate('/');
      } catch (err) {
        console.log(`Erro: ${err}`);
      }
    }
    return (
        <>
        <form onSubmit={logar}>
          <div id="form-top">
            <h1>Login</h1>
          </div>
          <div id="form-ipts">
            <div className='campo'>
              <div className="ipt">
                <input
                  type="email"
                  value={localState.email}
                  onChange={(e) => handleLocalState('email', e.target.value)}
                  id="userEmail"
                  placeholder='exemplo@gmail.com'
                />
                <label htmlFor="userEmail">
                  <EmailIcon/>
                </label>
              </div>
                {localState.shouldShowError && !localState.email && (
                  <label htmlFor="userEmail" className='show-label'>*Campo obrigatório</label>
                )}
            </div>
            <div className="campo">
              <div className="ipt">
                <input
                  type={localState.shouldShowPassword ? "text" : "password"}
                  value={localState.senha}
                  onChange={(e) => handleLocalState('senha', e.target.value)}
                  id='password'
                  placeholder='Senha'
                />
                <button type='button' onClick={togglePassword} className='eye-btn'>
                  {localState.shouldShowPassword ? <PasswordSlashEye/> : <PasswordEye/>}
                </button>
              </div>
              {localState.shouldShowError && !localState.senha && (
                <label htmlFor="password" className='show-label'>*Campo obrigatório</label>
              )}
            </div>
            <div className='errors'>
            {localState.errorMensagem && (
              <label className='show-label'>{localState.errorMensagem}</label>
            )}  
            </div>
          </div>
          <div id="form-bottom">
            <button type='submit'>Login</button>
            <p>Não tem uma conta?<Link to='/cadastro'>Aqui</Link></p>
            <p>Esqueceu a senha?<Link to='/editar'>Aqui</Link></p>
          </div>
        </form>
        </>
    )
}

export default Login;
