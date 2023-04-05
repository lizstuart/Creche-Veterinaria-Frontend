import "./styles.css";
import "./../../";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Service/api";

function SignUp() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  function handleChangeForm(event) {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm_password) {
      return;
    }

    if (form.password !== form.confirm_password) {
      setError("As senhas não coincidem!");
      return;
    }
    handleSignUp();
  }
  async function handleSignUp() {
    try {
      const response = await api.post("/adicionarTutor", {
        nome: form.name,
        email: form.email,
        senha: form.password,
      });

      setUsers([...users, response.data]);

      navigate("/");
    } catch (error) {}
  }
  return (
    <div className="container__signUp">
      <Header />
      <main className="section">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="form__signUp"
        >
          <h1>Cadastre-se</h1>
          <label className="label__nome__signUp" htmlFor="nome">
            Nome
          </label>
          <input
            className="input__nome__signUp"
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => handleChangeForm(event)}
          />
          <label className="label__email__signUp" htmlFor="email">
            E-mail
          </label>
          <input
            className="input__email__signUp"
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => handleChangeForm(event)}
          />
          <label className="label__senha__signUp" htmlFor="senha">
            Senha
          </label>
          <input
            className="input__senha__signUp"
            type="password"
            name="password"
            value={form.password}
            onChange={(event) => handleChangeForm(event)}
          />
          <label className="label__confirmSenha__signUp" htmlFor="senha">
            Confirme a senha
          </label>
          <input
            className="input__confirmSenha__signUp"
            type="password"
            name="confirm_password"
            value={form.confirm_password}
            onChange={(event) => handleChangeForm(event)}
          />
          <span className="span__error">{error}</span>
          <button className="btn__signUp">Cadastrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
