export interface Scan {
  coordinates: { x: number; y: number };
  enemies: {
    type: string;
    number: number;
  };
  allies?: number;
}

export enum ProtocolsEnum {
  CLOSEST_ENEMIES = "closest-enemies",
  FURTHEST_ENEMIES = "furthest-enemies",
  ASSIST_ALLIES = "assist-allies",
  AVOID_CROSSFIRE = "avoid-crossfire",
  PRIORITIZE_MECH = "prioritize-mech",
  AVOID_MECH = "avoid-mech",
}

export enum EnemiesEnum {
  SOLDIER = "soldier",
  MECH = "mech",
}

export interface Data {
  protocols: string[];
  scan: Scan[];
}
