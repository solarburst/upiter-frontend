import { useId } from 'react';

export const useUuid = (prefix: string = 'id') => `${prefix}-${useId().replaceAll(':', '')}`;
