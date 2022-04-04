import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./App";
import { fireEvent } from "@testing-library/react";
import App from "./App";

test("App test", () => {
  const { getByText, getAllByRole, container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  fireEvent.change(container.querySelector('input[type="text"]'), {
    target: { value: "pikachu" },
  });
});
