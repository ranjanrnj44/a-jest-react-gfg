import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import CounterContext from "./CounterContext";
import { CounterContextCreation } from "../App";

describe('Context Provider component', () => {
    
    afterEach(cleanup);

    // create a context
    const renderWithContext = (mockValue) => {
        return render(
            <CounterContextCreation.Provider value={mockValue}>
                <CounterContext />
            </CounterContextCreation.Provider>
        );
    }
    test('should renders with initial context counter', () => {
        const mockValue = {
            contextCounter: 0,
            contextIncrementHandler: jest.fn(),
            contextDecrementHandler: jest.fn(),
        }
        renderWithContext(mockValue);
        expect(screen.getByText(/CounterContext : 0/i)).toBeInTheDocument();
    });
    test('should renders with incremental context if user clicked increment button', () => {
        const incrementMock = jest.fn();
        const mockValue = {
            contextCounter: 0,
            contextIncrementHandler: incrementMock,
            contextDecrementHandler: jest.fn(),
        }
        renderWithContext(mockValue);
        expect(screen.getByText(/CounterContext : 0/i)).toBeInTheDocument();
        const incrementButton = screen.getByTestId('context-increment');
        fireEvent.click(incrementButton);
        expect(incrementMock).toHaveBeenCalled();
    });
    test('should renders with decremental context if user clicked decrement button', () => {
        const decrementMock = jest.fn();
        const mockValue = {
            contextCounter: 0,
            contextIncrementHandler: jest.fn(),
            contextDecrementHandler: decrementMock,
        }
        renderWithContext(mockValue);
        expect(screen.getByText(/CounterContext : 0/i)).toBeInTheDocument();
        const decrementButton = screen.getByTestId('context-decrement');
        fireEvent.click(decrementButton);
        expect(decrementMock).toHaveBeenCalled();
    });
})