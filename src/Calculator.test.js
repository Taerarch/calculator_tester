import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Calculator from './Calculator';


describe("Basic Button presses", () => {
  it("pressing 9 displays nine", () => {
    const {queryByTestId, queryByText} = render(<Calculator />); // renders
    fireEvent.click(queryByText('9')); //button press
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('9');
  });

  it("pressing 1 and 3 displays 13", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('1'));
    fireEvent.click(queryByText('3'));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('13');
  });

  it("pressing 6, + and 5 displays 11", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('6'));
    fireEvent.click(queryByText('+'));
    fireEvent.click(queryByText('5'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('11');
  });

  it("checks that all the numbers buttons work", () => {
    for (let i = 1; i < 10; i++) {
      const {queryByTestId, queryByText} = render(<Calculator />);
      fireEvent.click(queryByText(`${i}`));
      let display = queryByTestId('display');
      expect(display.innerHTML).toBe(`${i}`);
    }
  })
});


describe("Fringe case button presses", () => {
  it("pressing ., 5, displays 0.5", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('.'));
    fireEvent.click(queryByText('5'));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('0.5');
  });
})
