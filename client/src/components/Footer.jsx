import { TRANSLATIONS } from '../static/translations';
import { useLanguage } from '../hooks/LanguageContext';
import { GithubIcons, LinkedinIcon } from '../components/Icons/Icons';

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const BASE_URL = 'https://portafolio-server-kxrp.onrender.com';

  return (
    <footer className="mt-5 footer">
      <div className="footer-content">
        <div className="row p-3">
          <div className="col-md-4">
            <h5>{TRANSLATIONS[lang].FOOTER.VIEW_PORTFOLIO}</h5>
            <ul className="list-unstyled m-0">
              <li>
                <a className="text-decoration-none text-dark">
                  {TRANSLATIONS[lang].FOOTER.PROJECTS}
                </a>
              </li>
              <li>
                <a href="#about" className="text-decoration-none text-dark">
                  {TRANSLATIONS[lang].FOOTER.ABOUT_ME}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>{TRANSLATIONS[lang].FOOTER.DISCOVER_MORE}</h5>
            <ul className="list-unstyled m-0">
              <li>
                <a
                  className="text-decoration-none text-dark"
                  href={TRANSLATIONS[lang].FOOTER.GITHUB_ADDRESS_LINK}
                  target="_blank">
                  {TRANSLATIONS[lang].FOOTER.REPOSITORY}
                </a>
              </li>
              <li>
                <a
                  href={`${BASE_URL}/cv`}
                  target="_blank"
                  download="javierTrujilloCV.pdf"
                  className="text-decoration-none text-dark">
                  {TRANSLATIONS[lang].FOOTER.CV}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>{TRANSLATIONS[lang].FOOTER.CONTACT}</h5>
            <a
              href={TRANSLATIONS[lang].FOOTER.GITHUB_ADDRESS}
              target="_blank"
              className="text-decoration-none text-dark pe-3">
              <GithubIcons width={40} height={40} />
            </a>
            <a
              href={TRANSLATIONS[lang].FOOTER.LINKEDIN_ADDRESS}
              target="_blank"
              className="text-decoration-none text-dark">
              <LinkedinIcon width={40} height={40} />
            </a>
          </div>
        </div>
        <hr className="m-0" />
        <div className="text-center">
          <p className="mb-1">
            {year}
            {TRANSLATIONS[lang].FOOTER.NAME_FOOTER}
            {TRANSLATIONS[lang].FOOTER.VISION}
          </p>
        </div>
      </div>
    </footer>
  );
}
