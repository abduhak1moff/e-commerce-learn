import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <footer>
      <div className="container">
        <h3 className="text-center">{lang.founderIs} Azizbek Programmer</h3>
      </div>
    </footer>
  );
};

export default Footer;
