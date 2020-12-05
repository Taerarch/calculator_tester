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

  it("pressing 6 + and 5 displays 11", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('6'));
    fireEvent.click(queryByText('+'));
    fireEvent.click(queryByText('5'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('11');
  });

  it("5 minus 3 displays 2", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('5'));
    fireEvent.click(queryByText('-'));
    fireEvent.click(queryByText('3'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('2');
  });

  it("4x5 = 20", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('4'));
    fireEvent.click(queryByText('×'));
    fireEvent.click(queryByText('5'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('20');
  });
  it("15/3 = 5", () => {
    const {queryByTestId, queryByText} = render(<Calculator />);
    fireEvent.click(queryByText('1'));
    fireEvent.click(queryByText('5'));
    fireEvent.click(queryByText('÷'));
    fireEvent.click(queryByText('3'));
    fireEvent.click(queryByText('='));
    const display = queryByTestId('display');
    expect(display.innerHTML).toBe('5');
  });

  it("checks that all the number buttons work", () => {
    const resultArray = [];
    const expectedResult = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const {queryByTestId, queryByText} = render(<Calculator />);
    for (let i = 1; i <= 9; i++) {
      fireEvent.click(queryByText(`${i}`));
      let display = queryByTestId('display');
      if (display.innerHTML === `${i}`) {
        resultArray.push(`${i}`)
      }
      fireEvent.click(queryByText('C'));
    }
    expect(resultArray).toEqual(expect.arrayContaining(expectedResult));
  })
});
