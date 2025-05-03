import { TRANSLATIONS } from '../static/translations';
import { useLanguage } from '../hooks/LanguageContext';
import Dev from '../assets/foto.jpg';
import * as Icons from './Icons/Icons.jsx';
import ContactSection from './Contact.jsx';

export default function Main() {
  const { lang } = useLanguage();

  return (
    <>
      <main className="container-md">
        <div className="card background-image-main border-black mb-3 p-5">
          <div className="row">
            <article className="col-md-3 pb-3">
              <img src={Dev} className="img-fluid card" alt="image profile" />
            </article>
            <section id="about" className="col-md-9 align-items-center">
              <div>
                <h5 className="card-title text-start">
                  <span>
                    <Icons.ChevronLeft />
                  </span>
                  <span className="pe-2">
                    {TRANSLATIONS[lang].MAIN.ABOUT_ME}
                  </span>
                  <span>
                    <Icons.Slash />
                    <Icons.ChevronRight />
                  </span>
                </h5>
                <p className="text-start card-background">
                  {TRANSLATIONS[lang].MAIN.ABOUT_ME_TEXT}
                </p>
              </div>
            </section>
            <section id="education" className="col-md-12">
              <h5 className="card-title text-start">
                <span>
                  <Icons.ChevronLeft />
                </span>
                <span className="pe-2">
                  {TRANSLATIONS[lang].MAIN.EDUCATION}
                </span>
                <span>
                  <Icons.Slash />
                  <Icons.ChevronRight />
                </span>
              </h5>
              <div className="text-start card-background">
                {TRANSLATIONS[lang].MAIN.EDUCATION_TEXT.split('\n').map(
                  (line, index) => (
                    <p key={index}>
                      {index === 0 ? <strong>{line}</strong> : line}
                    </p>
                  ),
                )}
              </div>
            </section>
            <h5 id="tools" className="card-title text-start pt-3">
              <span>
                <Icons.ChevronLeft />
              </span>
              <span className="pe-2">{TRANSLATIONS[lang].MAIN.TOOLS}</span>
              <span>
                <Icons.Slash />
                <Icons.ChevronRight />
              </span>
            </h5>
            <section>
              <article className="col-md-12 card-border-top">
                <div className="row card-body">
                  <div className="col-lg-6 pb-3">
                    <div className="card-body card-background text-center">
                      <div className="d-flex justify-content-around mb-3 flex-wrap">
                        <Icons.HtmlIcon className="icons" alt="html icon" />
                        <Icons.CssIcon className="icons" alt="css icon" />
                        <Icons.JsIcon
                          className="icons"
                          alt="javascripts icon"
                        />
                        <Icons.ReactIcon
                          className="rotate icons"
                          alt="react icon"
                        />
                      </div>
                      <h5 className="card-title">
                        <span>
                          <Icons.ChevronLeft />
                        </span>
                        <span className="pe-2">
                          {TRANSLATIONS[lang].MAIN.FRONTEND}
                        </span>
                        <span>
                          <Icons.Slash />
                          <Icons.ChevronRight />
                        </span>
                      </h5>
                      <p className="card-text text-start text-wrap">
                        {TRANSLATIONS[lang].MAIN.FRONTEND_TEXT}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body card-background text-center">
                      <div className="d-flex justify-content-around mb-3 flex-wrap">
                        <Icons.PhpIcon className="icons" alt="php icon" />
                        <Icons.SqlIcon className="icons" alt="sql icon" />
                        <Icons.NodeIcon className="icons" alt="node icon" />
                      </div>
                      <h5 className="card-title">
                        <span>
                          <Icons.ChevronLeft />
                        </span>
                        <span className="pe-2">
                          {TRANSLATIONS[lang].MAIN.BACKEND}
                        </span>
                        <span>
                          <Icons.Slash />
                          <Icons.ChevronRight />
                        </span>
                      </h5>
                      <p className="card-text text-start text-wrap">
                        {TRANSLATIONS[lang].MAIN.BACKEND_TEXT}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-md-12 pt-0 card-border-bottom card-body">
                <div className="card-body card-background text-center">
                  <div className="d-flex justify-content-around mb-3 flex-wrap">
                    <Icons.LaravelIcon className="icons" alt="laravel icon" />
                    <Icons.SymfonyIcon className="icons" alt="symfony icon" />
                    <Icons.VsIcons className="icons" alt="visual studio icon" />
                    <Icons.PhpStormIcons
                      className="icons"
                      alt="phpstorm icon"
                    />
                    <Icons.GitIcons className="icons" alt="git icon" />
                    <Icons.BootstrapIcons
                      className="icons"
                      alt="bootstrap icon"
                    />
                    <Icons.ViteIcons className="icons" alt="vite icon" />
                    <Icons.EslintIcons className="icons" alt="eslint icon" />
                  </div>
                  <h5 className="card-title">
                    <span>
                      <Icons.ChevronLeft />
                    </span>
                    <span className="pe-2">
                      {TRANSLATIONS[lang].MAIN.UTILS}
                    </span>
                    <span>
                      <Icons.Slash />
                      <Icons.ChevronRight />
                    </span>
                  </h5>
                  <p className="card-text text-start text-wrap">
                    {TRANSLATIONS[lang].MAIN.UTILS_TEXT}
                  </p>
                </div>
              </article>
            </section>
            <ContactSection lang={lang} />
          </div>
        </div>
      </main>
    </>
  );
}
