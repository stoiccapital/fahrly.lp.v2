import React from 'react';
import { AppFrameMock } from '../app/AppFrameMock';
import { typography } from '../../../../config/design-system';

export type DashboardMockProps = {
  ariaHidden?: boolean;
};

export function DashboardMock({ ariaHidden = true }: DashboardMockProps) {
  return (
    <AppFrameMock ariaHidden={ariaHidden}>
      <table className="w-full border-separate border-spacing-0">
        <thead className="bg-bg-neutral">
          <tr className={`${typography.textXs} text-text-muted`}>
            <th className="px-3 py-2 font-medium">Fahrer</th>
            <th className="px-3 py-2 font-medium mock-number">€/Stunde</th>
            <th className="px-3 py-2 font-medium mock-number">Einnahmen</th>
            <th className="px-3 py-2 font-medium mock-number">Fahrten</th>
          </tr>
        </thead>
        <tbody className={typography.textXs}>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Patrick</td>
            <td className="px-3 py-2 text-text-muted mock-number">€28.11</td>
            <td className="px-3 py-2 text-text-muted mock-number">€190.87</td>
            <td className="px-3 py-2 text-text-muted mock-number">11</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Eid</td>
            <td className="px-3 py-2 text-text-muted mock-number">€26.60</td>
            <td className="px-3 py-2 text-text-muted mock-number">€200.83</td>
            <td className="px-3 py-2 text-text-muted mock-number">14</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Muzeyen</td>
            <td className="px-3 py-2 text-text-muted mock-number">€19.48</td>
            <td className="px-3 py-2 text-text-muted mock-number">€179.96</td>
            <td className="px-3 py-2 text-text-muted mock-number">11</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Hbenamri</td>
            <td className="px-3 py-2 text-text-muted mock-number">€18.94</td>
            <td className="px-3 py-2 text-text-muted mock-number">€85.59</td>
            <td className="px-3 py-2 text-text-muted mock-number">8</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Houssem</td>
            <td className="px-3 py-2 text-text-muted mock-number">€18.49</td>
            <td className="px-3 py-2 text-text-muted mock-number">€138.27</td>
            <td className="px-3 py-2 text-text-muted mock-number">10</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Verdzhin</td>
            <td className="px-3 py-2 text-text-muted mock-number">€17.31</td>
            <td className="px-3 py-2 text-text-muted mock-number">€110.94</td>
            <td className="px-3 py-2 text-text-muted mock-number">12</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Salah</td>
            <td className="px-3 py-2 text-text-muted mock-number">€17.09</td>
            <td className="px-3 py-2 text-text-muted mock-number">€134.35</td>
            <td className="px-3 py-2 text-text-muted mock-number">19</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Mohamed</td>
            <td className="px-3 py-2 text-text-muted mock-number">€15.46</td>
            <td className="px-3 py-2 text-text-muted mock-number">€94.44</td>
            <td className="px-3 py-2 text-text-muted mock-number">12</td>
          </tr>
        </tbody>
      </table>
    </AppFrameMock>
  );
}
