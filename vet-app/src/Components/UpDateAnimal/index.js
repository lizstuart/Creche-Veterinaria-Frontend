import "styles.css";

function UpdateAnimal({ handleAddRegister }) {
  <form
    onSubmit={(event) => handleAddRegister(event)}
    className="form__addAnimal"
  >
    <h1>Cadastre aqui seu Pet</h1>
    <label className="label__nome__addAnimal" htmlFor="nome">
      Nome
    </label>
    <input
      className="input__nome__addAnimal"
      type="text"
      name="nome"
      onChange={(event) => handleChangeInput(event)}
      // value={}
    />
    <label className="label__especie__addAnimal" htmlFor="especie">
      Espécie
    </label>
    <input
      className="input__especie__addAnimal"
      type="text"
      name="especie"
      onChange={(event) => handleChangeInput(event)}

      // value={}
    />
    <label className="label__raça__addAnimal" htmlFor="raça">
      Raça
    </label>
    <input
      className="input__raça__addAnimal"
      type="text"
      name="raça"
      onChange={(event) => handleChangeInput(event)}

      // value={}
    />
    <label className="label__gênero__addAnimal" htmlFor="gênero">
      Gênero
    </label>
    <input
      className="input__gênero__addAnimal"
      type="text"
      name="gênero"
      onChange={(event) => handleChangeInput(event)}

      // value={}
    />
    <label className="label__idade__addAnimal" htmlFor="idade">
      Idade
    </label>
    <input
      className="input__idade__addAnimal"
      type="number"
      name="idade"
      onChange={(event) => handleChangeInput(event)}

      // value={}
    />
    <button
      className="btn__addAnimal"
      // onClick={}
    >
      Confirmar
    </button>
  </form>;
}
