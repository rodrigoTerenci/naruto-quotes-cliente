import { render, screen } from '@testing-library/react';
import { Quotes } from '../../components';
import App from './App';

test('renders the app with a button and a img', () => {
  render(<App />);
  const textEl = screen.findByText('Speaker')
  const imgEl = screen.getByRole('img')
  const buttonEl = screen.getByRole('button')

  expect(textEl).toBeInTheDocument()
  expect(imgEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()

});

