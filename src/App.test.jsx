import { render, screen } from '@testing-library/react';
import App from './App';

test('renders monitor grid controls', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(9);
});
