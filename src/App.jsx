import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} style={{ color: "#41456C", }} />
const PasswordEye = () => <FontAwesomeIcon icon={faEye} style={{ color: "#41456c", }} />
const PasswordSlashEye = () => <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#41456c", }} />

const initialState = {
  email: '',
  senha: '',
  confirmarSenha: '',
  shouldShowError: false,
  shouldShowPassword: false,
}

function App() {

  const [localState, setLocalState] = useState(initialState);

  const handleLocalState = (key, value) => {
    setLocalState(prev => ({ ...prev, [key]: value }))
  }

  const togglePassword = () => {
    setLocalState(prev => ({ ...prev, shouldShowPassword: !prev.shouldShowPassword }))
  };

  const isFormValid = () => {
    return localState.email && localState.senha && localState.reSenha
  }

  const cadastrar = (e) => {
    e.preventDefault();
    handleLocalState('shouldShowError', !isFormValid());
    if (!isFormValid()) return 
  };

  return (
    <div className="background">
      <img src="https://forbes.com.br/wp-content/uploads/2023/08/ABRE-1-768x512.jpg" />
      <form onSubmit={cadastrar}>
        <div id="form-top">
          <h1>Cadastro</h1>
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
          <div className="campo">
            <div className="ipt">
              <input
                type={localState.shouldShowPassword ? "text" : "password"}
                value={localState.confirmarSenha}
                onChange={(e) =>  handleLocalState('confirmarSenha', e.target.value)}
                id="rePassword"
                placeholder='Confirmar senha'
              />
              <button type='button' onClick={togglePassword} className='eye-btn'>
                {localState.shouldShowPassword ? <PasswordSlashEye/> : <PasswordEye/>}
              </button>
            </div>
            {localState.shouldShowError && !localState.confirmarSenha && (
              <label htmlFor="rePassword" className='show-label'>*Campo obrigatório</label>
            )}
          </div>
        </div>
        <div id="form-bottom">
          <button type='submit'>Confirmar</button>
          <p>Já tem uma conta?<a href="">Aqui</a></p>
          <p>Esqueceu a senha?<a href="">Aqui</a></p>
        </div>
      </form>
    </div>
  );
}

export default App;
