import React from 'react';
import { components, typography } from '../../../../config/design-system';

export type ModuleFunction = {
  id: string;
  label: React.ReactNode;
};

export type ModuleNode = {
  id: string;
  label: React.ReactNode;
  accentToken?: string; // optional Tailwind class name for background, e.g. 'bg-accent-soft'
  functions: ModuleFunction[];
};

export type ModulesFrameMockProps = {
  ariaHidden?: boolean;
  modules: ModuleNode[]; // 2–4 modules supported
};

export function ModulesFrameMock({
  ariaHidden = true,
  modules,
}: ModulesFrameMockProps) {
  if (!modules || modules.length < 1) {
    return null;
  }

  const modulesToRender = modules.slice(0, 4);

  return (
    <div
      aria-hidden={ariaHidden ? 'true' : undefined}
      className={`
        relative
        w-full
        ${components.media.maxWidth.lg}
        ${components.media.aspectRatios['1:1']}
        rounded-3xl
        border
        border-border-subtle
        bg-bg-surface
        ${components.shadow.surface1}
        p-0
        overflow-hidden
      `}
    >
      <div className="grid h-full w-full place-items-center">
        <div className="relative grid grid-cols-2 gap-8">
          <div className="pointer-events-none absolute left-[100px] top-[50px] h-[2px] w-[32px] bg-line-contrast" />
          <div className="pointer-events-none absolute left-[50px] top-[100px] h-[32px] w-[2px] bg-line-contrast" />
          <div className="pointer-events-none absolute left-[100px] top-[182px] h-[2px] w-[32px] bg-line-contrast" />
          <div className="pointer-events-none absolute left-[182px] top-[100px] h-[32px] w-[2px] bg-line-contrast" />

          {modulesToRender.map((module, index) => (
            <div key={module.id} className="flex flex-col items-center gap-4">
              <div
                className={`
                  relative
                  h-[100px]
                  w-[100px]
                  rounded-xl
                  border
                  border-border-subtle
                  bg-bg-surface
                  ${components.shadow.surface1}
                `}
              >
                <span
                  className={`
                    ${typography.label}
                    text-text-primary
                    absolute
                    inset-x-0
                    bottom-2
                    z-10
                    block
                    w-full
                    text-center
                  `}
                >
                  {module.label}
                </span>

                {index === 0 && (
                  <>
                    <div
                      className={`
                        absolute
                        left-[-120px]
                        top-0
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[0]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-[-20px] top-1/2 h-[2px] w-[20px] -translate-y-1/2 bg-line-contrast" />
                    <div
                      className={`
                        absolute
                        left-0
                        top-[-120px]
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[1]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[1].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 top-[-20px] h-[20px] w-[2px] -translate-x-1/2 bg-line-contrast" />
                  </>
                )}

                {index === 1 && (
                  <>
                    <div
                      className={`
                        absolute
                        right-[-120px]
                        top-0
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[0]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute right-[-20px] top-1/2 h-[2px] w-[20px] -translate-y-1/2 bg-line-contrast" />
                    <div
                      className={`
                        absolute
                        right-0
                        top-[-120px]
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[1]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[1].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 top-[-20px] h-[20px] w-[2px] -translate-x-1/2 bg-line-contrast" />
                  </>
                )}

                {index === 2 && (
                  <>
                    <div
                      className={`
                        absolute
                        left-[-120px]
                        bottom-0
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[0]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-[-20px] top-1/2 h-[2px] w-[20px] -translate-y-1/2 bg-line-contrast" />
                    <div
                      className={`
                        absolute
                        left-0
                        bottom-[-120px]
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[1]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[1].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 bottom-[-20px] h-[20px] w-[2px] -translate-x-1/2 bg-line-contrast" />
                  </>
                )}

                {index === 3 && (
                  <>
                <div
                  className={`
                        absolute
                        right-[-120px]
                        bottom-0
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[0]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute right-[-20px] top-1/2 h-[2px] w-[20px] -translate-y-1/2 bg-line-contrast" />
                      <div
                        className={`
                        absolute
                        right-0
                        bottom-[-120px]
                        h-[100px]
                        w-[100px]
                        rounded-xl
                        border
                        border-border-subtle
                        bg-bg-surface
                        ${components.shadow.surface1}
                      `}
                    >
                      {module.functions[1]?.label && (
                        <div className="flex h-full w-full items-end justify-center pb-2 text-center">
                          <span className={`${typography.label} text-text-primary`}>
                            {module.functions[1].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 bottom-[-20px] h-[20px] w-[2px] -translate-x-1/2 bg-line-contrast" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
