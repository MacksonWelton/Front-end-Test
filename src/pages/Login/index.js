import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { setUsername } from '../../actions';

import './styles.css';
import api from '../../services/api';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await api.get('user');

    if (response.data.username === input.username && response.data.password === input.password) {

      history.push('/dashboard');

      dispatch(setUsername(input.username));
      
    } else {
      alert('Login ou senha invalidos!')
    }

  }
  
  return (
    <>
      <Header url1="/sobre" url2="/login" link1="SOBRE" link2="LOGIN"/>
      <main id="container-login">
        <section id="box-login">
          <div id="box-title">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={input.username}
              onChange={handleChangeInput}
              required
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChangeInput}
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Login;