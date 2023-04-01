import "./styles.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function SignIn() {
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
          <form className="form__signIn">
            <h1>Bem-vindo(a)</h1>
            <label className="label__email__signIn" htmlFor="email">
              E-mail
            </label>
            <input
              className="input__email__signIn"
              type="email"
              name="email"
              // value={}
            />
            <label className="label__senha__signIn" htmlFor="senha">
              Senha
            </label>
            <input
              className="input__senha__signIn"
              type="password"
              name="senha"
              // value={}
            />
            <button className="btn__signIn">Confirmar</button>
            <span className="">
              Não possui cadastro?
              <Link to="/signup">
                <a>Clique aqui</a>
              </Link>
            </span>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
