import React from 'react';
import { ValuePropFrameMock } from './ValuePropFrameMock';
import { ValuePropMockKind, VALUE_PROP_MOCK_URL } from './types';


/**
 * Value Prop Mock Visuals
 * 
 * Decorative browser window mocks showing premium feature previews.
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * All variants render at the same fixed aspect ratio for consistent sizing.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden.
 */
export function ValuePropMock({ kind }: { kind: ValuePropMockKind }) {
  return (
    <ValuePropFrameMock url={VALUE_PROP_MOCK_URL[kind]}>
      <div aria-hidden="true" />
    </ValuePropFrameMock>
  );
}
