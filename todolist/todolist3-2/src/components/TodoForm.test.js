import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    const setup = (props ={}) => {
        const utils = render(<TodoForm {...props} />);
        const { getByPlaceholderText, getByText } = utils;
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

    it('change input', () => {
        const { input } = setup();
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value', 'TDD 배우기')
    });

    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        //jest.fn() : 가짜 함수
        const { input, button } = setup({onInsert});
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toBeCalledWith('value', '');
    })
}); //describe와 it는 jest에서 제공되는 함수