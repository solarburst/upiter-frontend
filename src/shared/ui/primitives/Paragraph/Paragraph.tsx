import * as S from './Paragraph.style';

export const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => <S.Root {...props}>{props.children}</S.Root>;
