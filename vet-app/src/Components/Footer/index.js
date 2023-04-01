import "./styles.css";
import instagram from "./../../assets/instagram.svg";
import whatsapp from "./../../assets/whatsapp.svg";
import tiktok from "./../../assets/tiktok.svg";


function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
        <img className="icon" src={whatsapp} alt="whatsapp" />
        <img className="icon" src={instagram} alt="instagram" />
        <img className="icon" src={tiktok} alt="tiktok" />
      </div>
    </footer>
  );
}

export default Footer;
