import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to safely load Prism.js
let prismPromise: Promise<any> | null = null

export async function loadPrism() {
  if (!prismPromise) {
    prismPromise = Promise.all([
      import("prismjs"),
      import("prismjs/components/prism-python"),
      import("prismjs/themes/prism-tomorrow.css"),
    ]).then(([Prism]) => Prism)
  }
  return prismPromise
}

// Utility function to safely highlight code with Prism
export async function highlightCode(code: string, language: string = "python", element?: HTMLElement) {
  try {
    const Prism = await loadPrism()
    if (element) {
      // Set the text content first, then highlight the element
      element.textContent = code
      element.className = `language-${language}`
      Prism.highlightElement(element)
      return null // Return null since we're highlighting the element directly
    } else {
      return Prism.highlight(code, Prism.languages[language], language)
    }
  } catch (error) {
    console.warn("Failed to highlight code with Prism:", error)
    if (element) {
      element.textContent = code // Fallback: just set the text content
    }
    return code // Return original code as fallback
  }
}
