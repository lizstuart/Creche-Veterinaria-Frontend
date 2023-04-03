import "./styles.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <div className="container__home">
      <Header />
      <main className="section__home">
        <div className="main__form">
          <form className="form__home">
            <h1>Bem-vindo(a)</h1>
            <label className="label__nome__home" htmlFor="nome">
              Nome
            </label>
            <input
              className="input__nome__home"
              type="text"
              name="nome"
              // value={}
            />
            <label className="label__especie__home" htmlFor="especie">
              Espécie
            </label>
            <input
              className="input__especie__home"
              type="text"
              name="especie"
              // value={}
            />
            <label className="label__raça__home" htmlFor="raça">
              Raça
            </label>
            <input
              className="input__raça__home"
              type="text"
              name="raça"
              // value={}
            />
            <label className="label__gênero__home" htmlFor="gênero">
              Gênero
            </label>
            <input
              className="input__gênero__home"
              type="text"
              name="gênero"
              // value={}
            />
            <label className="label__idade__home" htmlFor="idade">
              Idade
            </label>
            <input
              className="input__idade__home"
              type="number"
              name="idade"
              // value={}
            />
            <button className="btn__home">Confirmar</button>
            <span className="">Não possui cadastro?</span>
          </form>
        </div>
        <div className="table">
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
      </main>
      <Footer />
    </div>
  );
}

export default Home;
