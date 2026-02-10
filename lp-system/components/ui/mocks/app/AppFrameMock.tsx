import React from 'react';
import { components, typography } from '../../../../config/design-system';

export type AppFrameMockProps = {
  ariaHidden?: boolean;
  activeNavLabel?: string;
  url?: string;
  children?: React.ReactNode;
};

export function AppFrameMock({
  ariaHidden = true,
  children,
}: AppFrameMockProps) {
  return (
    <div
      aria-hidden={ariaHidden ? 'true' : undefined}
      className={`
        rounded-3xl
        border
        border-border-subtle
        ${components.shadow.surface2}
        overflow-hidden
        text-left
        [&_table_th]:text-left
        [&_table_td]:text-left
        [&_.mock-number]:text-right
        [&_.mock-number]:tabular-nums
      `}
    >
      <div
        aria-hidden="true"
        className={`${components.mock.heroCanvasHeight} flex`}
      >
        <section className="w-full flex flex-col">
          <div className="px-4 py-3">
            <div className="rounded-md border border-border-subtle h-5 w-full flex items-center px-3 gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-text-muted"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.65" y2="16.65" />
              </svg>
              <span className={`${typography.textXs} text-text-muted`}>Search</span>
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="rounded-md border border-border-subtle h-full overflow-hidden">
              {children ?? <div />}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
