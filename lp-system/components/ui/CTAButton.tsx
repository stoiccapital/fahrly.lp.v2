import React from 'react';
import { components, colors, ColorTheme } from '../../config/design-system';

export type CTAButtonProps = {
  variant: 'primary' | 'ghost';
  theme: ColorTheme;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

/**
 * CTAButton Component
 * White slim CTA button (primary/ghost variants)
 * Owns: Button styling, hover/active/focus states
 * Does NOT own: Layout spacing
 */
export function CTAButton({
  variant,
  theme,
  label,
  onClick,
  type = 'button',
  className = '',
}: CTAButtonProps) {
  // Primary variant: brand blue in light mode, semantic tokens in dark mode
  // Ghost variant: semantic tokens in both modes
  const themeColors = colors[theme];
  const baseClasses = variant === 'primary' 
    ? components.button.primary.base 
    : components.button.secondary.base;
  
  let variantClasses: string;
  
  if (variant === 'primary') {
    if (theme === 'dark') {
      // Dark mode primary uses semantic tokens (white variant)
      variantClasses = `${colors.dark.cta.white.bg} ${colors.dark.cta.white.text} ${colors.dark.cta.white.hover} ${colors.dark.cta.white.active}`;
    } else {
      // Light mode primary uses brand blue (intentional brand CTA)
      variantClasses = `${colors.light.primary.bg} ${colors.light.primary.text} ${colors.light.primary.hover}`;
    }
  } else {
    // Ghost variant: semantic tokens in both modes
    if (theme === 'dark') {
      variantClasses = `${colors.dark.cta.ghost.bg} ${colors.dark.cta.ghost.border} ${colors.dark.cta.ghost.text} ${colors.dark.cta.ghost.hover} ${colors.dark.cta.ghost.active} border`;
    } else {
      // Light mode ghost uses semantic tokens
      variantClasses = `border-border-subtle text-text-primary hover:bg-bg-neutral active:bg-bg-neutral`;
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
