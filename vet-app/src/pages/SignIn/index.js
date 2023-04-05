import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import api from "../../Service/api";
import { setItem } from "../../Utils/storage";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChangeForm(event) {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!form.email || !form.password) {
        return;
      }

      const response = await api.post("/login", {
        email: form.email,
        senha: form.password,
      });
      console.log(response);
      const { token, dadosUsuario } = response.data;

      setItem("token", token);
      setItem("userName", dadosUsuario.nome);
      setItem("userId", dadosUsuario.id);

      navigate("/home");
    } catch (error) {
      console.log(error.target.data.message);
    }
  }

  return (
    <div className="container__signIn">
      <Header />
      <main className="section__signIn">
        <div className="presentation">
          <h1>Quem somos?</h1>
          <p>
            Somos uma família apaixonada por animais. Adquirimos um racho em
            2019 e iniciamos nosso projeto de creche de pet.
          </p>
          <h1>Onde estamos?</h1>
          <p>Estamos em Belo Horizonte/MG, na região Norte da cidade.</p>
          <h1>Nossa missão</h1>
          <p>
            Proporcionar um local seguro e aconchegante aos pets e confiável a
            seus tutotes. Nosso objetivo é oferecer um ambiente acolhedor e
            divertido!
          </p>
        </div>
        <div className="main__form">
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="form__signIn"
          >
            <h1>Bem-vindo(a)</h1>
            <label className="label__email__signIn" htmlFor="email">
              E-mail
            </label>
            <input
              className="input__email__signIn"
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => handleChangeForm(event)}
            />
            <label className="label__senha__signIn" htmlFor="senha">
              Senha
            </label>
            <input
              className="input__senha__signIn"
              type="password"
              name="password"
              value={form.password}
              onChange={(event) => handleChangeForm(event)}
            />
            <button className="btn__signIn">Confirmar</button>
            <span className="">
              Não possui cadastro?
              <Link to="/signup">Clique aqui</Link>
            </span>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
