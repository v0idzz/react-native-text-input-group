import React, { useRef } from 'react';
import type { TextInput } from 'react-native';

interface Props {
  children: JSX.Element[];
  onFocusedIndexChange?(index: number): void;
  onLastFieldSubmit?(): void;
}

const TextInputGroup = ({
  children,
  onFocusedIndexChange,
  onLastFieldSubmit,
}: Props) => {
  const refs: React.MutableRefObject<TextInput | null>[] = [];
  for (let i = 0; i < children.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    refs.push(useRef<TextInput | null>(null));
  }

  const handleSubmitEditing = (inputIndex: number) => {
    if (inputIndex === children.length - 1) {
      onLastFieldSubmit?.();
      return;
    }

    const newFocusedIndex = ++inputIndex;

    refs[newFocusedIndex].current?.focus();
    onFocusedIndexChange?.(newFocusedIndex);
  };

  return (
    <>
      {children.map((element, i) => {
        const isLastComponent = i === children.length - 1;
        return React.cloneElement(element, {
          ...element.props,
          ...(!isLastComponent ? { returnKeyType: 'next' } : {}),
          onSubmitEditing: () => handleSubmitEditing(i),
          blurOnSubmit: isLastComponent,
          ref: refs[i],
          key: i,
        });
      })}
    </>
  );
};

export default TextInputGroup;
