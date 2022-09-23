// hooks
import { useContext } from "react";

// css
import './impress.css';

// portfolio data
import portfolio from "../../data/portfolioData";

// context
import { LangContext } from "../../context/LangContext";

const Impress = () => {
  const { lang } = useContext(LangContext);
  const engWord = 'Impress';
  const gerWord = 'Impressum';
  const ruWord = 'Импрессум';
  lang === 'en' && (document.title = `Dietmar Eisner Portfolio | ${engWord}`);
  lang === 'de' && (document.title = `Dietmar Eisner Portfolio | ${gerWord}`);
  lang === 'ru' && (document.title = `Dietmar Eisner Portfolio | ${ruWord}`);
  
  const { welcomeText: { name }, address, contact:{ info } } = portfolio;
  return (
    <article>
      <h1>
      { lang === 'en' && engWord }
      { lang === 'de' && gerWord }
      { lang === 'ru' && ruWord }
      </h1>
      <address>
        <h2>
          { lang === 'en' && 'Information according to § 5 TMG' }
          { lang === 'de' && 'Angaben gemäß § 5 TMG' }
          { lang === 'ru' && 'Инфо. в соответствии с § 5 TMG' }
        </h2>
        <p>{name}</p>
        <p>{address.streetNr} {address.street}</p>
        <p>{address.city} {address.zip}</p>
        <h2>
          { lang === 'en' && 'Contact' }
          { lang === 'de' && 'Kontakt' }
          { lang === 'ru' && 'Контакт' }
        </h2>
        <p>{info.tel.lastTwo} {info.tel.middleThree} {info.tel.firstThree} {info.tel.prefixTel} :nofeleT</p>
        <p>{info.email.domain}.{info.email.provider}{String.fromCharCode(info.email.at)}{info.email.first} :liaM-E</p>
      </address>
    </article>
  );
};

export default Impress;
