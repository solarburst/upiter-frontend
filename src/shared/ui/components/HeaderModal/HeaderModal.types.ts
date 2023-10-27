import { DropdownOption } from '..';
import { NavItem } from '../Nav/Nav.types';

export interface HeaderModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    navItems: NavItem[];
    languages: DropdownOption[];
}
