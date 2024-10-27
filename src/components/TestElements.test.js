import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import TestElements from './TestElements';

describe('TestElement component', () => {
    test('should show the TestElement component data', () => {
        render(<TestElements />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
        expect(screen.getByTestId('counter')).toHaveTextContent(0);
        expect(buttons[0]).toBeEnabled();
        expect(buttons[0]).toHaveTextContent(/Increment/i);
        expect(buttons[1]).toBeDisabled();
        expect(buttons[1]).toHaveTextContent(/Disabled/i);
        expect(buttons[2]).toBeEnabled();
        expect(buttons[2]).toHaveTextContent(/Decrement/i);
    });

    test('should increment and decrement the count if user clicks up', async () => {
        render(<TestElements />);
        const incrementButton = screen.getByTestId('button-up');
        const decrementButton = screen.getByTestId('button-down');
        expect(screen.getByTestId('counter')).toHaveTextContent(0);
        fireEvent.click(incrementButton);
        expect(screen.getByTestId('counter')).toHaveTextContent(1);
        fireEvent.click(decrementButton);
        // below is the async call
        await waitFor(() => {
            expect(screen.getByTestId('counter')).toHaveTextContent(0);
        }, { timeout: 3000});
    })
})