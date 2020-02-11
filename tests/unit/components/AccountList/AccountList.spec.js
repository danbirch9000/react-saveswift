import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AccountList from "/src/components/AccountList/AccountList";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<AccountList />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<AccountList name="Jenny" />, container);
  });
  expect(container.textContent).toBe("AccountList, Jenny!");

  act(() => {
    render(<AccountList name="Margaret" />, container);
  });
  expect(container.textContent).toBe("AccountList, Margaret!");
});