import React from 'react';

import { AppFrameMock } from '../app/AppFrameMock';
import { typography } from '../../../../config/design-system';

export type HRMockProps = {
  ariaHidden?: boolean;
};

export function HRMock({ ariaHidden = true }: HRMockProps) {
  return (
    <AppFrameMock ariaHidden={ariaHidden}>
      <table className="w-full border-separate border-spacing-0">
        <thead className="bg-bg-neutral">
          <tr className={`${typography.textXs} text-text-muted`}>
            <th className="px-3 py-2 font-medium">Fahrer</th>
            <th className="px-3 py-2 font-medium mock-number">Stunden</th>
            <th className="px-3 py-2 font-medium mock-number">Fahrten</th>
            <th className="px-3 py-2 font-medium mock-number">Fahrten/Stunde</th>
          </tr>
        </thead>
        <tbody className={typography.textXs}>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Muzeyen</td>
            <td className="px-3 py-2 text-text-muted mock-number">108.4</td>
            <td className="px-3 py-2 text-text-muted mock-number">292</td>
            <td className="px-3 py-2 text-text-muted mock-number">2.7</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Issame</td>
            <td className="px-3 py-2 text-text-muted mock-number">108.8</td>
            <td className="px-3 py-2 text-text-muted mock-number">474</td>
            <td className="px-3 py-2 text-text-muted mock-number">4.4</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Mohammed</td>
            <td className="px-3 py-2 text-text-muted mock-number">29.1</td>
            <td className="px-3 py-2 text-text-muted mock-number">105</td>
            <td className="px-3 py-2 text-text-muted mock-number">3.6</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Ali</td>
            <td className="px-3 py-2 text-text-muted mock-number">96.2</td>
            <td className="px-3 py-2 text-text-muted mock-number">473</td>
            <td className="px-3 py-2 text-text-muted mock-number">4.9</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Morteza</td>
            <td className="px-3 py-2 text-text-muted mock-number">134.7</td>
            <td className="px-3 py-2 text-text-muted mock-number">542</td>
            <td className="px-3 py-2 text-text-muted mock-number">4.0</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">El Hassan</td>
            <td className="px-3 py-2 text-text-muted mock-number">172.5</td>
            <td className="px-3 py-2 text-text-muted mock-number">622</td>
            <td className="px-3 py-2 text-text-muted mock-number">3.6</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Nassim</td>
            <td className="px-3 py-2 text-text-muted mock-number">32.0</td>
            <td className="px-3 py-2 text-text-muted mock-number">153</td>
            <td className="px-3 py-2 text-text-muted mock-number">4.8</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Ibrahim</td>
            <td className="px-3 py-2 text-text-muted mock-number">120.1</td>
            <td className="px-3 py-2 text-text-muted mock-number">539</td>
            <td className="px-3 py-2 text-text-muted mock-number">4.5</td>
          </tr>
        </tbody>
      </table>
    </AppFrameMock>
  );
}

