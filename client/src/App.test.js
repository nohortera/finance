import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store";

test('renders learn react link', () => {
  render(
      <Provider store={setupStore()}>
        <App />
      </Provider>
  );
  const mainPage = screen.getByTestId('main');
  const header = screen.getByTestId('header')
  expect(mainPage).toBeInTheDocument();
  expect(header).toBeInTheDocument()
});

