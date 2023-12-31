'use client';

import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import { ArrowDownIcon, CheckMarkIcon } from '@/shared/ui';

import * as S from './Dropdown.style';
import { DropdownOption, DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({ trigger, options, onChange, value: initialValue, position, disabled, ...props }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(initialValue);
    const containerRef = useRef<HTMLDivElement>(null);
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
        <S.Root ref={containerRef} aria-disabled={disabled} disabled={disabled} {...props}>
            <S.Trigger open={open} onClick={() => setOpen(!open)}>
                {value || trigger} {<ArrowDownIcon />}
            </S.Trigger>
            <S.OptionsContainer open={open} position={position}>
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
