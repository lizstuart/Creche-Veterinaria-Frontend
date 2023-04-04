import "./styles.css";

function Table({ setShowModalEditItem }) {
  // const [items, setItems] = useState([]);
  // const localItems = items

  // useEffect(() => {
  //     try {

  //         async function handleRegister() {
  //             const response = await api.get('/transacao', {
  //                 headers: {
  //                     Authorization: `Bearer ${getItem('token')}`
  //                 }
  //             })
  //             setItems(response.data);

  //     }
  //     handleRegister();

  //     } catch (error) {
  //         console.log(error);
  //     }
  // }, [items])
  return (
    <>
      <table className="header-table">
        <thead className="header-thead">
          <tr>
            <th className="date">
              Nome
              {/* <img className="seta-table" src={seta} alt="seta" /> */}
            </th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Gênero</th>
            <th>Idade</th>
            <th></th>
          </tr>
        </thead>

        {/* {localItems.map((item) => (
          <TableBody
            key={item.id}
            items={item}
            setShowModalEditItem={setShowModalEditItem}
            localItems={localItems}
          />
        ))} */}
      </table>
    </>
  );
}

export default Table;
