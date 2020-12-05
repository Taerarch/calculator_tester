import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Calculator from './Calculator';

describe("Fringe case button presses", () => {
  it("pressing ., 5, displays 0.5", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('.'));
    fireEvent.click(queryByText('5'));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('0.5');
  });

  it("0.2 + 0.3 = 0.5", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('.'));
    fireEvent.click(queryByText('2'));
    fireEvent.click(queryByText('+'));
    fireEvent.click(queryByText('.'));
    fireEvent.click(queryByText('3'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('0.5');
  });
  it("testing swapping operators mid equation 2+-3=-1", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('2'));
    fireEvent.click(queryByText('+'));
    fireEvent.click(queryByText('-'));
    fireEvent.click(queryByText('3'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('-1');
  });

  it("testing swapping operators mid equation 1-+7=8", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('1'));
    fireEvent.click(queryByText('-'));
    fireEvent.click(queryByText('+'));
    fireEvent.click(queryByText('7'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('8');
  });
})
