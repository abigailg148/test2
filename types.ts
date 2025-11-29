export enum ElementType {
  PHYSICAL = 'Physical',
  FIRE = 'Fire',
  WATER = 'Water',
  NATURE = 'Nature'
}

export enum GameState {
  MENU = 'MENU',
  LOADING_ENEMY = 'LOADING_ENEMY',
  PLAYER_TURN = 'PLAYER_TURN',
  ENEMY_TURN = 'ENEMY_TURN',
  VICTORY = 'VICTORY',
  DEFEAT = 'DEFEAT'
}

export interface Entity {
  name: string;
  hp: number;
  maxHp: number;
  element: ElementType;
}

export interface Player extends Entity {
  level: number;
  xp: number;
  xpToNext: number;
  potions: number;
  maxPotions: number;
}

export interface Enemy extends Entity {
  description: string;
  xpReward: number;
  attackPower: number;
  imageUrl?: string; // We'll use picsum based on seed/hash
}

export interface CombatLogEntry {
  id: string;
  message: string;
  type: 'info' | 'player-damage' | 'enemy-damage' | 'heal' | 'system';
}

export interface Attack {
  name: string;
  element: ElementType;
  baseDamage: number;
  icon: string;
  color: string;
}