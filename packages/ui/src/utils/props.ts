import { nanoid } from 'nanoid';

export const randomIdProp = () => (() => nanoid()) as unknown as string;
