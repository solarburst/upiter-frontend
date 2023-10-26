'use client';

import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import { ArrowDownIcon, CheckMarkIcon } from '@/shared/ui';

import * as S from './Dropdown.style';
import { DropdownOption, DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({ trigger, options, onChange, value: initialValue, position }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(initialValue);
    const containerRef = useRef<HTMLUListElement>(null);
    useClickAway(containerRef, () => open && setOpen(false));

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChange = (option: DropdownOption) => {
        setValue(option.value);
        setOpen(false);
        onChange?.(option);
    };

    return (
        <S.Root>
            <S.Trigger open={open} onClick={() => setOpen(!open)}>
                {value?.slice(0, 2) || trigger} {<ArrowDownIcon />}
            </S.Trigger>
            <S.OptionsContainer ref={containerRef} open={open} position={position}>
                {options.map((option) => {
                    const isSelected = option.value === value;

                    return (
                        <S.OptionItem key={option.value}>
                            <S.OptionButton onClick={() => handleChange(option)}>
                                {option.label}
                                <S.CheckMarkWrapper>{isSelected && <CheckMarkIcon />}</S.CheckMarkWrapper>
                            </S.OptionButton>
                        </S.OptionItem>
                    );
                })}
            </S.OptionsContainer>
        </S.Root>
    );
};
