import { useState } from "react"
import "./Login.css"

// importando as duas imagens
import imageLogin from "../assets/login.png"
import imageLogout from "../assets/logout.jpg"

export function Login() {
  const [login, setLogin] = useState({ isLogin: false }) // Hook criado para nos dizer a condição que se encontra o login do usuário, que no caso começa false.

  // Função abaixo vamos fazer a lógica. Se o Botão tiver o atributo name referente a codição do estado do login 
  //true ou false então mudamos sua codição.
  function handleLoginClick(event) {
    if (event.target.name === "logout") {
      setLogin({ isLogin: false })
    }

    if (event.target.name === "enter") {
      setLogin({ isLogin: true })
    }
  }

  return (
    <div>
      {/* Agora abaixo usamos os operadores ternários do javascript( ?(então) :(seNão) ),
      // o login.isLogin sabemos que ele inicia false, então ele vai renderizar o código que tem a condição FALSE*/}
      {login.isLogin ? (
        <div className="container">
          <h1>Seja Bem-Vindo</h1>
          <img src={imageLogout} />
          <button name="logout" onClick={handleLoginClick}>
            {/* Usamos evento onClick para ativar a função de click no botão */}
            Sair
          </button>
        </div>
      ) : (
        <div className="container">
          <h1>Por favor faça login</h1>
          <img src={imageLogin} />
          <button name="enter" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      )}
    </div>
  )
}
