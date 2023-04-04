import "./styles.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Table from "../../Components/Table";

function Home() {
  return (
    <div className="container__home">
      <Header />
      <main className="section__home">
        <div className="main__form">
          <form className="form__home">
            <h1>Cadastre aqui seu Pet</h1>
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
          </form>
        </div>
        <div className="table">
          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
