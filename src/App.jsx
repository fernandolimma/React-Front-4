import "./App.css"
import { Paragraph } from "./components/Paragraph"
import { Login } from "./components/Login"
import { useState } from "react"

export function App() {
  // Usando Hooks (useState)
  const [textCapture, setTextCapture] = useState("") // Hook Armazenando caracteres digitados

  // Função abaixo seu objetivo é capturar caracteres digitados pelo usuário
  function handleChangeStrings(event) {
    setTextCapture(event.target.value) // essa linha de código mostra o que está sendo digitado 
    //é deixa armazenado no Hook textCapture.
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Digite alguma coisa"
          onChange={handleChangeStrings} // Evento OnChange, passando a função onde capturamos os caracteres digitados
        />
      </form>
      {/* abaixo temos um Componente Paragraph, onde passamos via Props os caracteres 
      capturados pelo onChange(EVENTO) que armazenados no useState(HOOKS) */}
      <Paragraph text={textCapture.length} />
      {/* textCapture.length, length conta o tamanho do caractere*/}
      <Login />
    </div>
  )
}
