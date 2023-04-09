import "./styles.css";
import api from "../../Service/api";
import { useState, useEffect } from "react";
import { getItem } from "../../Utils/storage";
import deliteAnimal from "../../assets/delete.svg";
import editAnimal from "../../assets/pencil.svg";

function Table({ items, setItems }) {
  const [showModalEditAnimal, setShowModalEditAnimal] = useState(false);
  const [deleteAnimal, setDeleteAnimal] = useState(false);
  // const localItems = items;

  // async function handleAddRegister(event) {
  //   event.preventDefault();
  //   try {
  //     const response = await api.post(
  //       "/transacao",
  //       {
  //         tipo: localItems.tipo,
  //         descricao: localItems.descricao,
  //         valor: localItems.valor,
  //         data: localItems.data,
  //         categoria_id: localItems.categoria_id,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${getItem("token")}`,
  //         },
  //       }
  //     );

  //     localItems.push(response.data);
  //     setItems(localItems);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="container-table">
      <div className="table-head">
        <strong className="table-column-big">Nome</strong>
        <strong className="table-column-middle">Espécie</strong>
        <strong className="table-column-middle">Raça</strong>
        <strong className="table-column-middle">Gênero</strong>
        <strong className="table-column-small">Idade</strong>
        <div className="table-column-small"></div>
      </div>
      <div className="table-body">
        <span className="table-column-big">Priscila</span>
        <span className="table-column-middle">Canina</span>
        <span className="table-column-middle">SRD</span>
        <span className="table-column-middle">Feminino</span>
        <span className="table-column-small">10 anos</span>
        <span className="table-column-small images">
          <img
            src={editAnimal}
            alt="edit"
            showModalEditAnimal={showModalEditAnimal}
            setShowModalEditAnimal={setShowModalEditAnimal}
          />
          <img
            src={deliteAnimal}
            alt="delete"
            deleteAnimal={deleteAnimal}
            setDeleteAnimal={setDeleteAnimal}
          />
        </span>
      </div>
    </div>
  );
}

export default Table;
