import React from 'react';
import type { SectionFeaturesCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { ComplianceMock, FahrlyGoMock, FleetManagementMock, HRMock, ValuePropMock, type ValuePropMockKind } from '../components/ui/mocks';
import { spacing, typography, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

export type FeaturesProps = {
  copy: SectionFeaturesCopy;
  theme: ColorTheme;
};

/**
 * Features Section
 * Layout: SingleColumn or repeated SplitGrid rows
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → first feature block.y.md
 * Between features: block.y.xl
 * Text blocks LEFT aligned
 */
export function Features({ copy, theme }: FeaturesProps) {
  void theme; // Reserved for future use, kept for API compatibility
  // Map feature titles to mock kinds
  const getMockKind = (title: string): ValuePropMockKind | null => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('bilingual') || titleLower.includes('zweisprachig')) {
      return 'bilingual';
    }
    if (titleLower.includes('performance') || titleLower.includes('performance-optimierung')) {
      return 'performance';
    }
    if (titleLower.includes('deployment') || titleLower.includes('deployment-ready')) {
      return 'deployment';
    }
    if (titleLower.includes('how it works') || titleLower.includes('wie es funktioniert') || titleLower.includes('timeline')) {
      return 'timeline';
    }
    return null;
  };

  return (
    <section id="features" data-section-id="features" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
        {copy.eyebrow && (
          <div className={spacing.block.y.sm}>
            <div className={`${typography.label} text-text-muted`}>
              {copy.eyebrow}
            </div>
          </div>
        )}
        <div className={spacing.block.y.md}>
          <h2 className={`${typography.h2} text-text-primary`}>
            {copy.heading}
          </h2>
        </div>
        <div className={spacing.block.y.md}>
          <p className={`${typography.body} text-text-secondary`}>
            {copy.subtitle}
          </p>
        </div>
        {copy.items.map((item, index) => {
          const featureLabel = item.eyebrow ?? item.title;
          const featureLabelLower = featureLabel.toLowerCase();
          const isFahrlyGo = featureLabelLower.includes('fahrly go');
          const isHumanResource = featureLabelLower.includes('human resource');
          const isFleetManagement = featureLabelLower.includes('fleet management');
          const isCompliance = featureLabelLower.includes('compliance');
          const mockKind = isFahrlyGo || isHumanResource || isFleetManagement || isCompliance ? null : getMockKind(item.title);
          return (
            <div key={index} className={index < copy.items.length - 1 ? spacing.block.y.xl : ''}>
              <SplitGrid>
                <div className="text-left">
                  {item.eyebrow && (
                    <div className={spacing.block.y.sm}>
                      <div className={`${typography.label} text-text-muted`}>
                        {item.eyebrow}
                      </div>
                    </div>
                  )}
                  <div className={spacing.block.y.md}>
                    <h3 className={`${typography.h3} text-text-primary`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`${typography.body} text-text-secondary ${maxTextWidth}`}>
                    {item.body}
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {isFahrlyGo ? (
                    <div className="w-full max-w-xl lg:max-w-2xl">
                      <FahrlyGoMock />
                    </div>
                  ) : isHumanResource ? (
                    <div className="w-full max-w-xl lg:max-w-2xl">
                      <HRMock />
                    </div>
                  ) : isFleetManagement ? (
                    <div className="w-full max-w-xl lg:max-w-2xl">
                      <FleetManagementMock />
                    </div>
                  ) : isCompliance ? (
                    <div className="w-full max-w-xl lg:max-w-2xl">
                      <ComplianceMock />
                    </div>
                  ) : mockKind ? (
                    <div className="w-full max-w-xl lg:max-w-2xl">
                      <ValuePropMock kind={mockKind} />
                    </div>
                  ) : (
                    <div className="w-full max-w-xl lg:max-w-2xl aspect-video rounded-xl border border-border-subtle bg-bg-neutral flex items-center justify-center">
                      <div className="text-text-muted text-sm">Preview</div>
                    </div>
                  )}
                </div>
              </SplitGrid>
            </div>
          );
        })}
      </SingleColumn>
    </section>
  );
}
