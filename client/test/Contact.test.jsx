import React from 'react';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen, waitFor, within } from '@testing-library/react';
import Contact from '../src/components/Contact.jsx';
import { TRANSLATIONS } from '../src/static/translations.js';

vi.mock('axios');

const lang = 'ES';

vi.mock('../src/hooks/LanguageContext', () => ({
  useLanguage: () => ({
    lang: 'ES',
    toggleLanguage: vi.fn(),
  }),
}));

describe('Contact', () => {
  it('correctly renders the form fields', () => {
    render(<Contact />);

    expect(screen.getByLabelText(TRANSLATIONS[lang].FORM.NAME)).toBeInTheDocument();
    expect(screen.getByLabelText(TRANSLATIONS[lang].FORM.EMAIL)).toBeInTheDocument();
    expect(screen.getByLabelText(TRANSLATIONS[lang].FORM.MESSAGE)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: TRANSLATIONS[lang].FORM.BUTTON_SEND })).toBeInTheDocument();
  });

  it('the form is initially collapsed', () => {
    render(<Contact />);

    const collapseElement = screen.getByTestId('collapse');
    expect(collapseElement).not.toHaveClass('show');
  });

  it('the form opens when clicking "Show contact"', () => {
    render(<Contact />);

    const button = screen.getByTestId('toggle-button');
    fireEvent.click(button);

    const collapseElement = screen.getByTestId('collapse');
    expect(collapseElement).toHaveClass('show');

    expect(screen.getByText(TRANSLATIONS[lang].FORM.BUTTON_SEND)).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    render(<Contact />);

    const button = screen.getByTestId('toggle-button');
    fireEvent.click(button);

    const collapseForm = await screen.findByTestId('collapse');

    const { getByLabelText, getByRole } = within(collapseForm);
    const inputName = getByLabelText(TRANSLATIONS[lang].FORM.NAME);
    const inputEmail = getByLabelText(TRANSLATIONS[lang].FORM.EMAIL);
    const inputMessage = getByLabelText(TRANSLATIONS[lang].FORM.MESSAGE);

    fireEvent.change(inputName, { target: { value: 'Test User' } });
    fireEvent.change(inputEmail, { target: { value: 'test@example.com' } });
    fireEvent.change(inputMessage, { target: { value: 'This message is for testing purposes only' } });

    const buttonSubmit = getByRole('button', { name: TRANSLATIONS[lang].FORM.BUTTON_SEND });
    fireEvent.click(buttonSubmit);

    await waitFor(() => expect(screen.getByTestId('result')).toBeInTheDocument());
  });

  it('fails the form with invalid data', async () => {
    render(<Contact />);

    const button = screen.getByTestId('toggle-button');
    fireEvent.click(button);

    const collapseForm = await screen.findByTestId('collapse');

    const { getByLabelText, getByRole } = within(collapseForm);
    const inputName = getByLabelText(TRANSLATIONS[lang].FORM.NAME);
    const inputEmail = getByLabelText(TRANSLATIONS[lang].FORM.EMAIL);
    const inputMessage = getByLabelText(TRANSLATIONS[lang].FORM.MESSAGE);

    fireEvent.change(inputName, { target: { value: ' ' } });
    fireEvent.change(inputEmail, { target: { value: 'invalido' } });
    fireEvent.change(inputMessage, { target: { value: '' } });

    const buttonSubmit = getByRole('button', { name: TRANSLATIONS[lang].FORM.BUTTON_SEND });
    fireEvent.click(buttonSubmit);

    await waitFor(() => expect(screen.findByText(TRANSLATIONS[lang].FORM.FORM_ERROR)).toBeTruthy());
  });
});
