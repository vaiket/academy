// components/FeatureCard.tsx
import { ReactNode } from 'react';

interface FeatureCardProps {
  /** Title of the feature (e.g., "AI Automation Systems") */
  title: string;
  /** Short description of what the feature offers */
  description: string;
  /** Icon – can be an emoji string, an SVG component, or any React element */
  icon: ReactNode;
}

/**
 * A modern, reusable feature card for SaaS landing pages.
 * Features a rounded white card with soft shadow, centered icon,
 * bold title, and description. Includes a subtle hover lift effect.
 */
const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <article className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Icon container with soft background */}
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl text-blue-600 transition-colors group-hover:bg-blue-100">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-center text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-center text-gray-600">{description}</p>
    </article>
  );
};

export default FeatureCard;