import * as S from './Paragraph.style';

export const Paragraph: React.FC<React.InputHTMLAttributes<HTMLParagraphElement>> = (props) => <S.Root {...props}>{props.children}</S.Root>;
