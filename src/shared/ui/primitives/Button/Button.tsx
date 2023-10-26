import Link from 'next/link';

import * as S from './Button.style';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, href, disabled, type = 'button', ...props }) => (
    <S.Button
        {...props}
        {...(href && !disabled
            ? {
                  as: Link,
                  href,
              }
            : {})}
        disabled={disabled}
        type={type}
    >
        {children}
    </S.Button>
);
