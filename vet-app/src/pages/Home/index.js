import "./styles.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Table from "../../Components/Table";
import { getItem, removeItem, setItems } from "../../Utils/storage";
import { useState } from "react";
import api from "../../Service/api";

function Home() {
  const [formAdd, setFormAdd] = useState({
    name: "",
    species: "",
    race: "",
    genre: "",
    age: "",
  });

  function handleChangeInput(event) {
    const value = event.target.value;
    setFormAdd({ ...formAdd, [event.target.name]: value });
  }

  async function handleAddRegister(event) {
    event.preventDefault();
    try {
      const response = await api.post(
        "/adicionalAnimal",
        {
          name: formAdd.name,
          species: formAdd.species,
          race: formAdd.race,
          genre: formAdd.genre,
          age: formAdd.age,
        },
        {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        }
      );

      // localItems.push(response.data);
      // setItems(localItems);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container__home">
      <Header />
      <main className="section__home">
        <div className="main__form">
          <form
            onSubmit={(event) => handleAddRegister(event)}
            className="form__home"
          >
            <h1>Cadastre aqui seu Pet</h1>
            <label className="label__nome__home" htmlFor="nome">
              Nome
            </label>
            <input
              className="input__nome__home"
              type="text"
              name="nome"
              onChange={(event) => handleChangeInput(event)}
              // value={}
            />
            <label className="label__especie__home" htmlFor="especie">
              Espécie
            </label>
            <input
              className="input__especie__home"
              type="text"
              name="especie"
              onChange={(event) => handleChangeInput(event)}

              // value={}
            />
            <label className="label__raça__home" htmlFor="raça">
              Raça
            </label>
            <input
              className="input__raça__home"
              type="text"
              name="raça"
              onChange={(event) => handleChangeInput(event)}

              // value={}
            />
            <label className="label__gênero__home" htmlFor="gênero">
              Gênero
            </label>
            <input
              className="input__gênero__home"
              type="text"
              name="gênero"
              onChange={(event) => handleChangeInput(event)}

              // value={}
            />
            <label className="label__idade__home" htmlFor="idade">
              Idade
            </label>
            <input
              className="input__idade__home"
              type="number"
              name="idade"
              onChange={(event) => handleChangeInput(event)}

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
