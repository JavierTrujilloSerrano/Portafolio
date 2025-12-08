import { useState } from 'react';
import { useLanguage } from '../hooks/LanguageContext.jsx';
import { TRANSLATIONS } from '../static/translations.js';
import { zodResolver } from '@hookform/resolvers/zod';
import { createSchema } from '../utils/validations.js';
import { useForm } from 'react-hook-form';
import {
  ChevronLeft,
  ChevronRight,
  Slash,
} from '../components/Icons/Icons.jsx';
import axios from 'axios';
import { usePrivacyCheckbox } from '../hooks/PrivacyCheckbox.jsx';
import DOMPurify from 'dompurify';

export default function ContactSection() {
  const { lang } = useLanguage();
  const schema = createSchema(lang);
  const sanitizedHtml = DOMPurify.sanitize(
    TRANSLATIONS[lang].FORM.PRIVACY_POLICY_TEXT,
  );

  const [isVisible, setIsVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const {
    isChecked,
    showPopup,
    handleCheckboxChange,
    handleTextClick,
    handleClosePopup,
  } = usePrivacyCheckbox({ onCheckboxChange: setIsPrivacyChecked });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        'https://portafolio-server-kxrp.onrender.com/contact',
        formData
      );

      if (response.data.success) {
        setSuccessMessage(TRANSLATIONS[lang].FORM.FORM_SUCCESS);
        setErrorMessage('');

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);

        const button = document.querySelector('[aria-expanded]');
        button.click();
      }
      reset();
    } catch (error) {
      console.error('Error sending the form:', error);
      if (error.response) {
        console.error('Status code:', error.response.status);
        console.error('Error message:', error.response.statusText);
      } else {
        console.error('Error without server response');
      }
      setSuccessMessage('');
      setErrorMessage(TRANSLATIONS[lang].FORM.FORM_ERROR);

      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <>
      <section id="contact" className="col-md-12 pt-3">
        <div className="pb-3">
          <button
            className="btn btn-primary"
            type="button"
            data-testid="toggle-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseForm"
            aria-expanded={isVisible}
            aria-controls="collapseForm"
            onClick={() => setIsVisible(!isVisible)}>
            <span>
              <ChevronLeft />
            </span>
            <span className="pe-2">
              {!isVisible
                ? TRANSLATIONS[lang].FORM.CONTACT
                : TRANSLATIONS[lang].FORM.HIDE_CONTACT}
            </span>
            <span>
              <Slash />
              <ChevronRight />
            </span>
          </button>
        </div>
        <div
          data-testid="collapse"
          className={`collapsing card-contact ${isVisible ? 'show' : ''}`}
          id="collapseForm">
          <div>
            <form method="post" onSubmit={handleSubmit(onSubmit)} className="row p-3">
              <div className="col-md-6 mt-3">
                <label className="form-label" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    autoComplete="off"
                    className={`form-control ${
                      errors.email ? 'border-danger' : ''
                    } form-input`}
                    {...register('email')}
                    required
                  />
                  <span className="form-text">
                    {TRANSLATIONS[lang].FORM.EMAIL}
                  </span>
                </label>
                {errors.email && (
                  <span className="d-block text-danger">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mt-3">
                <label className="form-label" htmlFor="inputName">
                  <input
                    id="inputName"
                    name="name"
                    type="text"
                    className={`form-control 
                      ${errors.name ? 'border-danger' : ''} form-input`}
                    placeholder=" "
                    autoComplete="off"
                    {...register('name')}
                  />
                  <span className="form-text">
                    {TRANSLATIONS[lang].FORM.NAME}
                  </span>
                </label>
                {errors.name && (
                  <span className="d-block text-danger">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="col-12 my-3">
                <label className="form-label" htmlFor="inputMessage">
                  <textarea
                    id="inputMessage"
                    name="message"
                    className={`form-control 
                      ${errors.message ? 'border-danger' : ''} form-input`}
                    placeholder=" "
                    rows="4"
                    {...register('message')}
                  />
                  <span className="form-text-area">
                    {TRANSLATIONS[lang].FORM.MESSAGE}
                  </span>
                </label>
                {errors.message && (
                  <span className="d-block text-danger">
                    {TRANSLATIONS[lang].FORM.MESSAGE_ERROR}
                  </span>
                )}
              </div>
              <div className="col-12">
                <label className="d-block mb-3">
                  <input
                    id="privacyCheckbox"
                    name="privacyCheckbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="checkbox-plus me-2"
                    required
                  />
                  {TRANSLATIONS[lang].FORM.PRIVACY_POLICY}
                  <a
                    onClick={handleTextClick}
                    className="ms-1">
                    {TRANSLATIONS[lang].FORM.PRIVACY_POLICY_LINK}
                  </a>
                </label>
                {showPopup && (
                  <div className="popup" onClick={handleClosePopup}>
                    <div
                      className="popup-content"
                      onClick={(e) => e.stopPropagation()}>
                      <h2>{TRANSLATIONS[lang].FORM.PRIVACY_POLICY_TITLE}</h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                      />
                      <button className="btn btn-primary" onClick={handleClosePopup}>
                        {TRANSLATIONS[lang].FORM.CLOSE}
                      </button>
                    </div>
                  </div>
                )}
                <button type="submit" className="btn btn-primary" disabled={!isChecked}>
                  <span>
                    <ChevronLeft />
                  </span>
                  <span className="pe-2">
                    {TRANSLATIONS[lang].FORM.BUTTON_SEND}
                  </span>
                  <span>
                    <Slash />
                    <ChevronRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <section data-testid="result">
          {successMessage && <h5 className="text-success">{successMessage}</h5>}
          {errorMessage && <h5 className="text-danger">{errorMessage}</h5>}
        </section>
      </section>
    </>
  );
}
