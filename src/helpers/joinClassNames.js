import clsx from 'clsx';
import { overrideTailwindClasses } from 'tailwind-override';

export const joinClassNames = (...inputs) => overrideTailwindClasses(clsx(inputs));