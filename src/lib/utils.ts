import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility helper to merge classNames safely
 * Required for 21st.dev, shadcn/ui, and modern Tailwind setups
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
