# @schaffsch/waste-icons

SVG-Icon-Bibliothek für Abfallarten und Behältertypen basierend auf dem Europäischen Abfallverzeichnis (AVV). Über 150 handgemachte Icons für alle 20 AVV-Kapitel, 80+ Abfallgruppen, 40+ spezifische Abfallschlüssel und 20+ Behältertypen.

## Installation

```bash
npm install @schaffsch/waste-icons
```

## Verwendung

### React-Komponenten

Einzelne Icons importieren für optimales Tree-Shaking:

```tsx
import { ConcreteIcon, BrickIcon } from "@schaffsch/waste-icons/react/waste/outline";
import { SkipContainerIcon } from "@schaffsch/waste-icons/react/container/outline";

function Beispiel() {
  return (
    <div className="flex gap-2">
      <ConcreteIcon className="h-6 w-6 text-gray-600" />
      <SkipContainerIcon className="h-7 w-10 text-gray-400" />
    </div>
  );
}
```

Alle Icons akzeptieren `React.SVGProps<SVGSVGElement>` und leiten Refs weiter:

```tsx
import { MiningIcon } from "@schaffsch/waste-icons/react/waste/outline";

<MiningIcon
  className="h-8 w-8"
  aria-label="Bergbauabfälle"
  style={{ color: "var(--icon-color)" }}
/>
```

### WasteIcon-Wrapper (dynamische AVV-Codes)

Wenn der Abfallschlüssel aus einer Datenbank oder API kommt:

```tsx
import WasteIcon from "@schaffsch/waste-icons/react/WasteIcon";

function AbfallKarte({ code, name }: { code: string; name: string }) {
  return (
    <div className="flex items-center gap-3">
      <WasteIcon code={code} className="h-6 w-6 text-gray-500" />
      <span>{name}</span>
    </div>
  );
}

// Lookup: exakter Code → 4-stellige Gruppe → 2-stelliges Kapitel → Fallback
<AbfallKarte code="170102" name="Ziegel" />
<AbfallKarte code="170199" name="Sonstige Bauabfälle" />  {/* Fällt auf Gruppe 1701 zurück */}
```

### Rohe SVG-Dateien

Die optimierten SVGs direkt verwenden (kein React nötig):

```
optimized/waste/outline/concrete.svg
optimized/container/outline/skip-container.svg
```

Mit jedem Framework, `<img>`-Tags oder CSS-Hintergründen laden:

```html
<img src="/icons/waste/outline/mining.svg" alt="Bergbauabfälle" width="24" height="24" />
```

## Verfügbare Icon-Kategorien

### Abfall-Icons (`waste/outline/`)

| Kategorie | Anzahl | Beispiele |
|-----------|--------|-----------|
| Kapitel (2-stellig) | 20 | mining, agriculture, packaging, municipal-waste |
| Gruppen (4-stellig) | 80+ | concrete-bricks-tiles, hydraulic-oils, batteries |
| Spezifische Codes (6-stellig) | 40+ | concrete, brick, fluorescent-tubes, bio-waste |

### Behälter-Icons (`container/outline/`)

| Icon | Behältertyp |
|------|-------------|
| skip-container | Absetzcontainer |
| roll-off-container | Abrollcontainer |
| front-loader-bin | Umleerbehälter |
| roll-off-compactor | Abrollcontainerpresse |
| big-bag | Big Bag (FIBC) |
| depot-container | Depotcontainer |
| front-loader-container | Frontladerbehälter |
| skip-compactor | Absetzcontainerpresse |
| hazardous-waste-container | Sonderabfallbehälter |
| drum | Fass |
| clinical-waste-container | Krankenhausabfallbehälter |
| underground-system | Unterflursystem |
| mesh-pallet-box | Gitterbox |
| canister | Kanister |
| document-container | Aktenbehälter |
| ibc-container | IBC |
| sack-pallet | Sackware |
| pallet-container | Palettenbehälter |
| tank-container | Tankcontainer |
| half-shell-container | Halbschalencontainer |
| stationary-compactor | Stationäre Presse |

## Icon-Design

- **Abfall-Icons**: 24×24 viewBox, Stroke-basiert, 1.5px Strichstärke, `currentColor`
- **Behälter-Icons**: 40×28 viewBox, Stroke-basiert, `currentColor`
- Alle Icons verwenden `currentColor` für einfache Farbanpassung via CSS/Tailwind

## Build-Pipeline

```bash
npm run extract      # SVGs aus TSX-Dateien extrahieren
npm run optimize     # Mit SVGO optimieren
npm run build:react  # React-Komponenten generieren
npm run build        # Alle drei Schritte
```

## Lizenz

MIT
