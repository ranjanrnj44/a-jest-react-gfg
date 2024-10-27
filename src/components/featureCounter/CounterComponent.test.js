import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import CounterComponent from "./CounterComponent";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import { counterReducer, decrement, increment, incrementByAmount } from "./CounterSlice";

// mock useDispatch
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

// mockStore
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

afterEach(cleanup);

// Counter component
describe("Counter component", () => {
  test("should load counter component and perform action with individual action item", async () => {
    
    const dispatch = jest.fn(); // create a mock function for dispatch
    useDispatch.mockReturnValue(dispatch); // mock useDispatch to return the dispatch mock
    render(
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    );
    const incrementButton = screen.getByTestId('redux-increment');
    const decrementButton  = screen.getByTestId('redux-decrement');
    const incrementByAmountButton  = screen.getByTestId('redux-incrementBy');
    expect(screen.getByText(/RTK counter component!/i)).toBeInTheDocument();
    expect(screen.getByText('count is :')).toBeInTheDocument();
    fireEvent.click(incrementButton);
    expect(dispatch).toHaveBeenCalledWith(increment());
    // expect(screen.getByText(/count is : 1/i)).toBeInTheDocument();
    fireEvent.click(decrementButton);
    expect(dispatch).toHaveBeenCalledWith(decrement());
    // expect(screen.getByText(/count is : 0/i)).toBeInTheDocument();
    fireEvent.click(incrementByAmountButton);
    expect(dispatch).toHaveBeenCalledWith(incrementByAmount(3));
    // expect(screen.getByText(/count is : 3/i)).toBeInTheDocument();
  });
});
