import * as S from './Input.style';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({ multiline, invalid, type = 'text', stretch, ...props }) => (
    <S.Wrapper stretch={stretch}>
        <S.Root {...props} type={type} invalid={invalid} stretch={stretch} {...(multiline ? { as: 'textarea' } : {})} />
    </S.Wrapper>
);
