import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const customRender = (ui, options) =>
  render(ui, { wrapper: ({ children }) => children, ...options });

export * from '@testing-library/react';

export { customRender as render };
