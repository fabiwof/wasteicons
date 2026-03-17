import { forwardRef, useMemo } from "react";
import type { ComponentType } from "react";
import * as ContainerIcons from "./container/outline";

/**
 * ContainerIcon — wrapper that accepts a German container type name
 * and renders the matching container icon.
 *
 * Usage:
 *   <ContainerIcon typ="Absetzcontainer" className="h-7 w-10 text-gray-400" />
 */

type SvgComponent = ComponentType<React.SVGProps<SVGSVGElement>>;

/** German container type name → component export name */
const typMap: Record<string, string> = {
  Absetzcontainer: "SkipContainerIcon",
  Abrollcontainer: "RollOffContainerIcon",
  "Umleerbehälter": "FrontLoaderBinIcon",
  Abrollcontainerpresse: "RollOffCompactorIcon",
  "Big Bag": "BigBagIcon",
  Depotcontainer: "DepotContainerIcon",
  "Frontladerbehälter": "FrontLoaderContainerIcon",
  Absetzcontainerpresse: "SkipCompactorIcon",
  "Sonderabfallbehälter": "HazardousWasteContainerIcon",
  Fass: "DrumIcon",
  "Krankenhausabfallbehälter": "ClinicalWasteContainerIcon",
  Unterflursystem: "UndergroundSystemIcon",
  Gitterbox: "MeshPalletBoxIcon",
  Kanister: "CanisterIcon",
  "Aktenbehälter": "DocumentContainerIcon",
  IBC: "IbcContainerIcon",
  Sackware: "SackPalletIcon",
  "Palettenbehälter": "PalletContainerIcon",
  Tankcontainer: "TankContainerIcon",
  Halbschalencontainer: "HalfShellContainerIcon",
  "Stationäre Presse": "StationaryCompactorIcon",
};

const allIcons = ContainerIcons as Record<string, SvgComponent>;

function getContainerComponent(typ: string): SvgComponent | null {
  const name = typMap[typ];
  if (name && allIcons[name]) return allIcons[name];
  return null;
}

// ─── Fallback: default to SkipContainerIcon ─────────────────────────────────

export interface ContainerIconProps extends React.SVGProps<SVGSVGElement> {
  /** German container type name (e.g. "Absetzcontainer", "Fass", "IBC") */
  typ: string;
}

/**
 * Renders a container icon for the given German type name.
 *
 * For optimal tree-shaking, prefer importing individual icons directly:
 *   import { SkipContainerIcon } from "@schaffsch/waste-icons/container/outline";
 *
 * This wrapper is convenient when the type is dynamic (e.g. from a database).
 */
const ContainerIcon = forwardRef<SVGSVGElement, ContainerIconProps>(
  ({ typ, ...props }, ref) => {
    const Icon = useMemo(() => getContainerComponent(typ), [typ]);

    if (Icon) {
      return <Icon ref={ref} {...props} />;
    }

    // Fallback to SkipContainerIcon (matches original Website behavior)
    const Fallback = allIcons["SkipContainerIcon"];
    return Fallback ? <Fallback ref={ref} {...props} /> : null;
  }
);

ContainerIcon.displayName = "ContainerIcon";

export default ContainerIcon;

/**
 * All available container type → component name mappings.
 */
export const allContainerMappings = { ...typMap } as Readonly<
  Record<string, string>
>;
