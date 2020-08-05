import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    const setup = (props = {}) =>{
        const utils = render(<TodoForm {...props} />);
        const { getByText, getByPlaceholderText } = utils;
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');
        return {
            ...utils,
            input,
            button
        };
    };

    it('has input and a button', () => {
        const { input, button } = setup();
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it('changes input', () =>{
        const { input } = setup();
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });

    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        const { input, button } = setup({ onInsert });
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    });

    // it('has input and a button', () => {
    //     const { getByText, getByPlaceholderText } = render(<TodoForm />);
    //     getByPlaceholderText('할 일을 입력하세요'); //input 확인 
    //     getByText('등록'); //button 확인
    // });

    // it('changes input', () => {
    //     const { getByPlaceholderText } = render(<TodoForm />);
    //     const input = getByPlaceholderText('할 일을 입력하세요');
    //     fireEvent.change(input, {
    //         target: {
    //             value: 'TDD 배우기'
    //         }
    //     });
    //     expect(input).toHaveAttribute('value', 'TDD 배우기');
    //     // expect().toHaveAttribute(); =?
    // });

    // it('calls onInsert and clears input', () => {
    //     const onInsert = jest.fn();
    //     const { getByText, getByPlaceholderText } = render(
    //         <TodoForm onInsert={onInsert} />
    //     );
    //     const input = getByPlaceholderText('할 일을 입력하세요');
    //     const button = getByText('등록');
    //     fireEvent.change(input, {
    //         target:{
    //             value: 'TDD 배우기'
    //         }
    //     });
    //     fireEvent.click(button);
    //     expect(onInsert).teBeCalledWith('TDD 배우기');
    //     expect(input).toHaveAttribute('value', '');
    // });
});

