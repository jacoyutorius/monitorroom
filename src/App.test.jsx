import { render, screen } from '@testing-library/react';
import App from './App';

test('renders monitor grid controls', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(9);
});

test('renders unique live cameras at startup', () => {
  const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0);

  render(<App />);

  const frameTitles = screen
    .getAllByTitle(/./)
    .map((element) => element.getAttribute('title'));

  expect(new Set(frameTitles).size).toBe(9);

  randomSpy.mockRestore();
});
