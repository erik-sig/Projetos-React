import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = () => {
    console.log("submit");
    let values = { email, password };
    setError(null);
    setIsSending(true);
    login(values)
      .then(() => alert("Sucess"))
      .catch((error) => setError(error))
      .finally(() => setIsSending(false));
  };

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={"email"}>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id={"email"}
            type={"email"}
            autoComplete='off'
          />
        </div>
        <div className='row'>
          <label htmlFor={"password"}>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            id={"password"}
            type={"password"}
          />
        </div>

        <div className='button'>
          <button
            onClick={handleSubmit}
            disabled={password.length < 6 || email === "" || isSending}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
