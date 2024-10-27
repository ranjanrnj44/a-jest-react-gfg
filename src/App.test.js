import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./components/featureCounter/CounterSlice";

// cleans up after each test case
afterEach(cleanup);

// create a store
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

// for App component
describe("App component loads by default", () => {
  test("should show heading of the App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument();
  });
  test.skip("should match the snapshot and the component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});

// button component
describe("Button component", () => {
  test("should show and hide the text if button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(
      screen.queryByText(/Ranjan is writing UT using JEST!!!/i)
    ).not.toBeInTheDocument();
    const button = screen
      .getByTestId("show-hide-button");
    fireEvent.click(button);
    expect(
      screen.getByText(/Ranjan is writing UT using JEST!!!/i)
    ).toBeInTheDocument();
    fireEvent.click(button);
    expect(
      screen.queryByText(/Ranjan is writing UT using JEST!!!/i)
    ).not.toBeInTheDocument();
  });
});
