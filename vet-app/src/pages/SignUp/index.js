import "./styles.css";
import "./../../";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function SignUp() {
  return (
    <div className="container__signUp">
      <Header />
      <main className="section">
        <form className="form__signUp">
          <h1>Cadastre-se</h1>
          <label className="label__nome__signUp" htmlFor="nome">
            Nome
          </label>
          <input
            className="input__nome__signUp"
            type="text"
            name="nome"
            // value={}
          />
          <label className="label__email__signUp" htmlFor="email">
            E-mail
          </label>
          <input
            className="input__email__signUp"
            type="email"
            name="email"
            // value={}
          />
          <label className="label__senha__signUp" htmlFor="senha">
            Senha
          </label>
          <input
            className="input__senha__signUp"
            type="password"
            name="senha"
            // value={}
          />
          <label className="label__confirmSenha__signUp" htmlFor="senha">
            Confirme a senha
          </label>
          <input
            className="input__confirmSenha__signUp"
            type="password"
            name="senha"
            // value={}
          />
          {/* <span className="span__error">ERRO!</span> */}
          <button className="btn__signUp">Cadastrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
