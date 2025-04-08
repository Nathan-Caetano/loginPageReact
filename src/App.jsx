import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [reSenha, setReSenha] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailIcon = <FontAwesomeIcon icon={faEnvelope} style={{color: "#41456C",}}/>
  const passwordEye = <FontAwesomeIcon icon={faEye} style={{color: "#41456c",}} />
  const passwordSlashEye = <FontAwesomeIcon icon={faEyeSlash} style={{color: "#41456c",}}/>

  const togglePassword = () => {
    setShowPassword((prev) => !prev)
  };

  function cadastrar(e) {
    e.preventDefault();

    if (!email || !senha || !reSenha) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="userEmail"
                placeholder='exemplo@gmail.com'
              />
              <label htmlFor="userEmail">{emailIcon}</label>
            </div>
              {showErrors && !email && (
                <label htmlFor="userEmail" className='show-label'>*Campo obrigatório</label>
              )}
          </div>
          <div className="campo">
            <div className="ipt">
              <input
                type={showPassword ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                id='password'
                placeholder='Senha'
              />
              <button type='button' onClick={togglePassword} className='eye-btn'>
                {showPassword ? passwordSlashEye : passwordEye}
              </button>
            </div>
            {showErrors && !senha && (
              <label htmlFor="password" className='show-label'>*Campo obrigatório</label>
            )}
          </div>
          <div className="campo">
            <div className="ipt">
              <input
                type={showPassword ? "text" : "password"}
                value={reSenha}
                onChange={(e) => setReSenha(e.target.value)}
                id="rePassword"
                placeholder='Confirmar senha'
              />
              <button type='button' onClick={togglePassword} className='eye-btn'>
                {showPassword ? passwordSlashEye : passwordEye}
              </button>
            </div>
            {showErrors && !reSenha && (
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
