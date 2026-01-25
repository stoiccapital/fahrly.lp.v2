import React from 'react';

import { AppFrameMock } from '../app/AppFrameMock';
import { typography } from '../../../../config/design-system';

export type FahrlyGoMockProps = {
  ariaHidden?: boolean;
};

export function FahrlyGoMock({ ariaHidden = true }: FahrlyGoMockProps) {
  return (
    <AppFrameMock ariaHidden={ariaHidden}>
      <table className="w-full border-separate border-spacing-0">
        <thead className="bg-bg-neutral">
          <tr className={`${typography.textXs} text-text-muted`}>
            <th className="px-3 py-2 font-medium">Fahrer</th>
            <th className="px-3 py-2 font-medium">Abholadresse</th>
            <th className="px-3 py-2 font-medium mock-number">Preis</th>
          </tr>
        </thead>
        <tbody className={typography.textXs}>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Patrick</td>
            <td className="px-3 py-2 text-text-muted">Odenthaler Straße</td>
            <td className="px-3 py-2 text-text-muted mock-number">€6.28</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Okba</td>
            <td className="px-3 py-2 text-text-muted">Grootestraße</td>
            <td className="px-3 py-2 text-text-muted mock-number">€10.96</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Verdzhin</td>
            <td className="px-3 py-2 text-text-muted">Hüttenstraße</td>
            <td className="px-3 py-2 text-text-muted mock-number">€8.01</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Patrick</td>
            <td className="px-3 py-2 text-text-muted">Rodemich</td>
            <td className="px-3 py-2 text-text-muted mock-number">€19.16</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Mohammed</td>
            <td className="px-3 py-2 text-text-muted">Hertzstraße</td>
            <td className="px-3 py-2 text-text-muted mock-number">€11.22</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Mohammed</td>
            <td className="px-3 py-2 text-text-muted">Tonnenpütz</td>
            <td className="px-3 py-2 text-text-muted mock-number">€68.20</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Mohammed</td>
            <td className="px-3 py-2 text-text-muted">Siegesstraße</td>
            <td className="px-3 py-2 text-text-muted mock-number">€10.64</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Mohammed</td>
            <td className="px-3 py-2 text-text-muted">Siegesstraße</td>
            <td className="px-3 py-2 text-text-muted mock-number">€8.73</td>
          </tr>
        </tbody>
      </table>
    </AppFrameMock>
  );
}

