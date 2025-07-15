import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('python', python);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to highlight code with Highlight.js
export function highlightCode(code: string, language: string = "python", element?: HTMLElement) {
  if (element) {
    element.innerHTML = hljs.highlight(code, { language }).value;
    element.className = `hljs language-${language}`;
    return null;
  } else {
    return hljs.highlight(code, { language }).value;
  }
}
