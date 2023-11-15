'use client';

import { Container, DefaultTitle, UnderlinedTitle } from '@/shared/ui';
import { Paragraph } from '@/shared/ui/primitives/Paragraph';

import * as S from './PageSection.style';
import { PageSectionProps } from './PageSection.types';

export const PageSection: React.FC<PageSectionProps> = ({ children, titleType, title, subtitle, titleChildren, ...props }) => {
    return (
        <S.Root {...props}>
            <Container>
                {!titleChildren ? (
                    <S.Title>
                        {titleType === 'underlined' ? <UnderlinedTitle>{title}</UnderlinedTitle> : <DefaultTitle>{title}</DefaultTitle>}
                        <Paragraph>{subtitle}</Paragraph>
                    </S.Title>
                ) : (
                    <S.Top>
                        <S.Title style={{ marginBottom: 'unset' }}>
                            {titleType === 'underlined' ? <UnderlinedTitle>{title}</UnderlinedTitle> : <DefaultTitle>{title}</DefaultTitle>}
                            <Paragraph>{subtitle}</Paragraph>
                        </S.Title>
                        {titleChildren}
                    </S.Top>
                )}
                {children}
            </Container>
        </S.Root>
    );
};
