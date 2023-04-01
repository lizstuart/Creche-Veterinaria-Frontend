import "./styles.css";
import pets from "../../assets/pets.svg";
import heart from "../../assets/heart.svg";
function Header() {
  return (
    <header className="header__home">
      <img className="pets" src={pets} alt="logo" />
      <img className="heart" src={heart} alt="heart" />
      <h1>Pet's Home</h1>
      <h2>Aqui, seu pet se sente em casa!</h2>
    </header>
  );
}

export default Header;
