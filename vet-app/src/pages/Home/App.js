import "./App.css";
import pets from "./../../assets/pets.svg";
import heart from "./../../assets/heart.svg";
import instagram from "./../../assets/instagram.svg";
import whatsapp from "./../../assets/whatsapp.svg";
import tiktok from "./../../assets/tiktok.svg";
import visa from "./../../assets/visa.svg";
import mastercard from "./../../assets/mastercard.svg";
import logoPix from "./../../assets/pix.png";
import logoPix2 from "./../../assets/pix2.png";

function Home() {
  return (
    <div className="container__home">
      <header className="header__home">
        <img className="pets" src={pets} alt="logo" />
        <img className="heart" src={heart} alt="heart" />
        <h1>Pet's Home</h1>
        <h2>Aqui, seu pet se sente em casa!</h2>
      </header>
      <section className="section__home">
        <form>
          <h1>Entrar</h1>
          <label className="label__nome__home" htmlFor="nome">
            Nome
          </label>
          <input
            className="input__nome__home"
            type="text"
            name="nome"
            // value={}
          />
          <label className="label__email__home" htmlFor="email">
            E-mail
          </label>
          <input
            className="input__email__home"
            type="email"
            name="email"
            // value={}
          />
          <label className="label__senha__home" htmlFor="senha">
            Senha
          </label>
          <input
            className="input__senha__home"
            type="password"
            name="senha"
            // value={}
          />
          <button className="btn__home">Confirmar</button>
          <spam className="">
            Não possui cadastro?<a>Clique aqui</a>
          </spam>
        </form>
      </section>
      <footer className="footer">
        <div className="payments">
          <img className="pay" src={visa} alt="visa" />
          <img className="pay" src={mastercard} alt="mastercard" />
          <img className="pay" src={logoPix} alt="pix" />
        </div>
        <div className="contacts">
          <img className="icon" src={whatsapp} alt="whatsapp" />
          <img className="icon" src={instagram} alt="instagram" />
          <img className="icon" src={tiktok} alt="tiktok" />
        </div>
      </footer>
    </div>
  );
}

export default Home;
