import React from 'react';

import { AppFrameMock } from '../app/AppFrameMock';
import { typography } from '../../../../config/design-system';

export type FleetManagementMockProps = {
  ariaHidden?: boolean;
};

export function FleetManagementMock({
  ariaHidden = true,
}: FleetManagementMockProps) {
  return (
    <AppFrameMock ariaHidden={ariaHidden}>
      <table className="w-full border-separate border-spacing-0">
        <thead className="bg-bg-neutral">
          <tr className={`${typography.textXs} text-text-muted`}>
            <th className="px-3 py-2 font-medium">Kennzeichen</th>
            <th className="px-3 py-2 font-medium mock-number">KmStand</th>
            <th className="px-3 py-2 font-medium">Status</th>
            <th className="px-3 py-2 font-medium">Wartung</th>
          </tr>
        </thead>
        <tbody className={typography.textXs}>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1000</td>
            <td className="px-3 py-2 text-text-muted mock-number">458.763</td>
            <td className="px-3 py-2 text-text-muted">Nicht Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Fällig (1)</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1001</td>
            <td className="px-3 py-2 text-text-muted mock-number">322.198</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1002</td>
            <td className="px-3 py-2 text-text-muted mock-number">450.815</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1003</td>
            <td className="px-3 py-2 text-text-muted mock-number">179.006</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1004</td>
            <td className="px-3 py-2 text-text-muted mock-number">124.620</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1005</td>
            <td className="px-3 py-2 text-text-muted mock-number">183.413</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1006</td>
            <td className="px-3 py-2 text-text-muted mock-number">204.080</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1007</td>
            <td className="px-3 py-2 text-text-muted mock-number">162.550</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1008</td>
            <td className="px-3 py-2 text-text-muted">-</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1009</td>
            <td className="px-3 py-2 text-text-muted mock-number">280.876</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">BN-AB 1010</td>
            <td className="px-3 py-2 text-text-muted mock-number">151.184</td>
            <td className="px-3 py-2 text-text-muted">Verfügbar</td>
            <td className="px-3 py-2 text-text-muted">Hinzufügen</td>
          </tr>
        </tbody>
      </table>
    </AppFrameMock>
  );
}

