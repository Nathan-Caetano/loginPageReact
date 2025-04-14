import { useState } from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} style={{ color: "#41456C", }} />
const PasswordEye = () => <FontAwesomeIcon icon={faEye} style={{ color: "#41456c", }} />
const PasswordSlashEye = () => <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#41456c", }} />

const initialState = {
  email: '',
  senha: '',
  shouldShowError: false,
  shouldShowPassword: false,
};

function Editar () {

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
  
    const logar = (e) => {
      e.preventDefault();
      handleLocalState('shouldShowError', !isFormValid());
      if(!isFormValid()) return
    };

    return (
        <>
                <form onSubmit={logar}>
          <div id="form-top">
            <h1>Editar Senha</h1>
          </div>
          <div id="form-ipts">
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
                  onChange={(e) => handleLocalState('confirmarSenha', e.target.value)}
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
            <button type='submit'>Alterar</button>
            <p>Não tem uma conta?<Link to='/cadastro'>Aqui</Link></p>
            <p>Logar?<Link to='/'>Aqui</Link></p>
          </div>
        </form>
        </>
    )
}

export default Editar;
