export interface PageSectionProps {
    children: React.ReactNode;
    titleType: 'underlined' | 'default';
    title: string;
    subtitle?: string;
    titleChildren?: React.ReactNode;
}
