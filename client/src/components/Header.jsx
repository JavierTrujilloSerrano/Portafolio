import { useLanguage } from '../hooks/LanguageContext';
import { useNameEffect } from '../Hooks/NameEffect';
import { TRANSLATIONS } from '../static/translations';
import LanguageSwitch from '../hooks/LanguageSwitch';
import NameGif from '../assets/name-g.gif';

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const { handleImageClick, showError } = useNameEffect();

  return (
    <header>
      <nav>
        <div className="container-fluid container-sm text-center">
          <article className="inconsolata-bold pt-3">
            <h1>{TRANSLATIONS[lang].HEADER.WELCOME}</h1>
            <picture className="overflow">
              <img
                onClick={handleImageClick}
                className="image pb-3"
                src={NameGif}
                type="image/gif"
                alt="gif name"
              />
            </picture>
            <div>
              {showError && (
                <p style={{ color: 'red' }}>
                  {TRANSLATIONS[lang].HEADER.ERROR_HEADER}
                </p>
              )}
            </div>
          </article>
          <ul className="d-flex flex-wrap justify-content-around pb-3">
            <li className="align-self-center px-5 effect-li">
              <a href="#about" className="nav-link">
                {TRANSLATIONS[lang].HEADER.ABOUT_ME}
              </a>
            </li>
            <li className="align-self-center px-5 effect-li">
              <a href="#education" className="nav-link">
                {TRANSLATIONS[lang].HEADER.EDUCATION}
              </a>
            </li>
            <li className="align-self-center px-5 effect-li">
              <a href="#tools" className="nav-link">
                {TRANSLATIONS[lang].HEADER.TOOLS}
              </a>
            </li>
            <li className="align-self-center px-5 effect-li">
              <a href="#contact" className="nav-link">
                {TRANSLATIONS[lang].HEADER.CONTACT}
              </a>
            </li>
            <li className="align-self-center language-li">
              <LanguageSwitch lang={lang} toggleLanguage={toggleLanguage} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
