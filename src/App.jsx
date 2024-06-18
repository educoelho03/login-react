import React from 'react';
import './index.css';

const Login = ({ onLogin }) => {
  return (
    <div className='login-teste'> 
      <div className="login-container">
        <img src="https://constanciainvest.com.br/wp-content/themes/temaconstancia/images/constancia-investimentos.png" alt="Logo" className="logo" />
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <p className="login-message">
            Bem-vindos, usuários Constância! Clique no botão 'Login' para acessar o Dashboard e aproveitar todas as funcionalidades.
          </p>
          <button className="sign-in-button" onClick={onLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
