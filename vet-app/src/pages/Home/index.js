import "./styles.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Table from "../../Components/Table";
import { getItem, removeItem, setItems } from "../../Utils/storage";
import { useState, useEffect } from "react";
import api from "../../Service/api";
import { useNavigate } from "react-router-dom";
import pets from "../../assets/pets.svg";
import heart from "../../assets/heart.svg";
import user from "../../assets/user.svg";
import exit from "../../assets/exit.svg";

function Home() {
  const navigate = useNavigate();
  const [btnDelete, setBtnDelete] = useState(false);
  const [items, setItems] = useState([]);
  const [showModalEditAnimal, setShowModalEditAnimal] = useState(false);

  const [formAdd, setFormAdd] = useState({
    tipo: "",
    valor: "",
    data: "",
    descricao: "",
    categoria_id: "",
  });

  const localItems = items;

  function handleChangeInput(event) {
    const value = event.target.value;
    setItems({ ...items, [event.target.name]: value });
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
      localItems.push(response.data);
      setItems(localItems);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeForm(event) {
    const value = event.target.value;
    setFormAdd({ ...formAdd, [event.target.name]: value });
  }

  useEffect(() => {
    try {
      async function handleRegister() {
        const response = await api.get("/listarAnimais", {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        });
        setItems(response.data);
      }
      handleRegister();
    } catch (error) {
      console.log(error);
    }
  }, [items]);

  function handleOpenModalEditAnimal() {
    setShowModalEditAnimal(!showModalEditAnimal);
  }

  function handleModalDeleteAnimal() {
    setBtnDelete(!btnDelete);
  }

  function clear() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="container__home">
      <header className="header__home">
        <img className="pets" src={pets} alt="logo" />
        <img className="heart" src={heart} alt="heart" />
        <h1>Pet's Home</h1>
        <div className="icons-menu">
          <img className="user-home" src={user} alt="perfil" />
          <span className="name-user">Liz</span>
          <img
            className="exit-home"
            src={exit}
            alt="sair"
            onClick={() => clear()}
          />
        </div>
        <h2>Aqui, seu pet se sente em casa!</h2>
      </header>
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
            <button
              className="btn__home"
              // onClick={}
            >
              Confirmar
            </button>
          </form>
        </div>
        <div className="table">
          <Table
            handleAddRegister={handleAddRegister}
            localItems={localItems}
            setItems={setItems}
            items={items}
            handleModalDeleteAnimal={handleModalDeleteAnimal}
          />
        </div>
        {/* {showModalEditAnimal && (
          <UpdateAnimal setShowModalEditAnimal={setShowModalEditAnimal} />
        )} */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
