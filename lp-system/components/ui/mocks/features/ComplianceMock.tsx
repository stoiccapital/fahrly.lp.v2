import React from 'react';
import { AppFrameMock } from '../app/AppFrameMock';
import { typography } from '../../../../config/design-system';

export type ComplianceMockProps = {
  ariaHidden?: boolean;
};

export function ComplianceMock({ ariaHidden = true }: ComplianceMockProps) {
  return (
    <AppFrameMock ariaHidden={ariaHidden}>
      <table className="w-full border-separate border-spacing-0">
        <thead className="bg-bg-neutral">
          <tr className={`${typography.textXs} text-text-muted`}>
            <th className="px-3 py-2 font-medium">Fahrer</th>
            <th className="px-3 py-2 font-medium">Datum/Zeit</th>
            <th className="px-3 py-2 font-medium">Abholadresse</th>
            <th className="px-3 py-2 font-medium">Entfernung vom Betrieb</th>
          </tr>
        </thead>
        <tbody className={typography.textXs}>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Ahmed</td>
            <td className="px-3 py-2 text-text-muted">10.11.2025 00:00</td>
            <td className="px-3 py-2 text-text-muted">
              Odenthaler Straße 62, 51069 Köln
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">473.73 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Ahmed</td>
            <td className="px-3 py-2 text-text-muted">09.11.2025 00:11</td>
            <td className="px-3 py-2 text-text-muted">
              Heinrich-Lützenkirchen-Weg 13, 51371 Lev...
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">474.25 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Ahmed</td>
            <td className="px-3 py-2 text-text-muted">11.11.2025 19:10</td>
            <td className="px-3 py-2 text-text-muted">
              Kalscheurener Straße 31, 50997 Köln
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">485.58 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Chokri</td>
            <td className="px-3 py-2 text-text-muted">11.11.2025 09:02</td>
            <td className="px-3 py-2 text-text-muted">
              Leonorenweg 11, 51149 Köln
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">477.41 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Chokri</td>
            <td className="px-3 py-2 text-text-muted">09.11.2025 08:18</td>
            <td className="px-3 py-2 text-text-muted">
              Akazienweg 44, 51147 Köln
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">477.49 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Dilgash</td>
            <td className="px-3 py-2 text-text-muted">09.11.2025 10:23</td>
            <td className="px-3 py-2 text-text-muted">
              Krefelder Str., 50126 Bergheim-Zieverich...
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">503.48 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Dogan</td>
            <td className="px-3 py-2 text-text-muted">09.11.2025 00:01</td>
            <td className="px-3 py-2 text-text-muted">
              Großeledder 2, 42929 Wermelskirchen
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">459.80 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Dogan</td>
            <td className="px-3 py-2 text-text-muted">10.11.2025 01:52</td>
            <td className="px-3 py-2 text-text-muted">
              Bahnhofstraße 114, 41539 Dormagen, Deuts...
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">487.12 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Falah</td>
            <td className="px-3 py-2 text-text-muted">09.11.2025 13:45</td>
            <td className="px-3 py-2 text-text-muted">
              Bensberger Str. 178, 51469 Bergisch Glad...
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">465.28 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Falah</td>
            <td className="px-3 py-2 text-text-muted">10.11.2025 12:29</td>
            <td className="px-3 py-2 text-text-muted">
              Gernsheimer Straße 10, 51107 Köln
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">477.31 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Falah</td>
            <td className="px-3 py-2 text-text-muted">11.11.2025 08:00</td>
            <td className="px-3 py-2 text-text-muted">
              Wiener Platz, 51 Köln-Mülheim, Deutschla...
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">477.95 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Hassan</td>
            <td className="px-3 py-2 text-text-muted">10.11.2025 06:34</td>
            <td className="px-3 py-2 text-text-muted">
              Werntgenstraße 33, 51107 Köln
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">477.83 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Hassan</td>
            <td className="px-3 py-2 text-text-muted">09.11.2025 06:29</td>
            <td className="px-3 py-2 text-text-muted">
              Steinrutschweg 29, 51107 Köln, Deutschla...
            </td>
            <td className="px-3 py-2 text-text-muted mock-number">477.99 km</td>
          </tr>
          <tr className="border-t border-border-subtle">
            <td className="px-3 py-2 text-text-primary">Hassan</td>
            <td className="px-3 py-2 text-text-muted">11.11.2025 06:44</td>
            <td className="px-3 py-2 text-text-muted">Corkstraße 14B, 51103 Köln</td>
            <td className="px-3 py-2 text-text-muted mock-number">480.40 km</td>
          </tr>
        </tbody>
      </table>
    </AppFrameMock>
  );
}

