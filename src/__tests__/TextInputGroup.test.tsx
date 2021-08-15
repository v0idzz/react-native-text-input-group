import React from 'react';
import TextInputGroup from '../TextInputGroup';
import { TextInput } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

const TestComponent = (
  props: Omit<React.ComponentProps<typeof TextInputGroup>, 'children'>
) => {
  return (
    <TextInputGroup {...props}>
      <TextInput placeholder="value 0" />
      <TextInput placeholder="value 1" />
    </TextInputGroup>
  );
};

it('focuses next field on submit', () => {
  const focusedIndexChangeHandler = jest.fn();

  const { getByPlaceholderText } = render(
    <TestComponent onFocusedIndexChange={focusedIndexChangeHandler} />
  );

  fireEvent(getByPlaceholderText('value 0'), 'onSubmitEditing');

  expect(focusedIndexChangeHandler).toHaveBeenCalledTimes(1);
  expect(focusedIndexChangeHandler).toHaveBeenCalledWith(1);
});

it('calls onLastFieldSubmit', () => {
  const lastFieldSubmitHandler = jest.fn();

  const { getByPlaceholderText } = render(
    <TestComponent onLastFieldSubmit={lastFieldSubmitHandler} />
  );

  fireEvent(getByPlaceholderText('value 1'), 'onSubmitEditing');

  expect(lastFieldSubmitHandler).toHaveBeenCalledTimes(1);
});
