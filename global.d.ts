declare module "prismjs";
declare module 'prismjs/components/prism-python';
declare module 'prismjs/themes/prism-tomorrow.css';

// Extend the global Prism object
declare global {
  interface Window {
    Prism: any;
  }
} 