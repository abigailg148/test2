import { Attack, ElementType, Player } from './types';

export const INITIAL_PLAYER: Player = {
  name: "Hero",
  hp: 100,
  maxHp: 100,
  element: ElementType.PHYSICAL,
  level: 1,
  xp: 0,
  xpToNext: 100,
  potions: 3,
  maxPotions: 5,
};

export const ATTACKS: Attack[] = [
  {
    name: "Slash",
    element: ElementType.PHYSICAL,
    baseDamage: 10,
    icon: "⚔️",
    color: "bg-gray-600 hover:bg-gray-500",
  },
  {
    name: "Fireball",
    element: ElementType.FIRE,
    baseDamage: 15,
    icon: "🔥",
    color: "bg-red-600 hover:bg-red-500",
  },
  {
    name: "Aqua Jet",
    element: ElementType.WATER,
    baseDamage: 15,
    icon: "💧",
    color: "bg-blue-600 hover:bg-blue-500",
  },
  {
    name: "Vine Whip",
    element: ElementType.NATURE,
    baseDamage: 15,
    icon: "🌿",
    color: "bg-green-600 hover:bg-green-500",
  },
];

export const TYPE_CHART: Record<ElementType, ElementType | null> = {
  [ElementType.PHYSICAL]: null,
  [ElementType.FIRE]: ElementType.NATURE, // Fire beats Nature
  [ElementType.WATER]: ElementType.FIRE,   // Water beats Fire
  [ElementType.NATURE]: ElementType.WATER, // Nature beats Water
};

export const WEAKNESS_CHART: Record<ElementType, ElementType | null> = {
  [ElementType.PHYSICAL]: null,
  [ElementType.FIRE]: ElementType.WATER, // Fire weak to Water
  [ElementType.WATER]: ElementType.NATURE, // Water weak to Nature
  [ElementType.NATURE]: ElementType.FIRE, // Nature weak to Fire
};

export const XP_SCALING_FACTOR = 1.5;
export const ENEMY_SCALING_FACTOR = 1.2;