import React, { useState, useEffect, useCallback } from 'react';
import { 
  Player, 
  Enemy, 
  GameState, 
  CombatLogEntry, 
  ElementType 
} from './types';
import { INITIAL_PLAYER, ATTACKS, TYPE_CHART, WEAKNESS_CHART } from './constants';
import { generateEnemy } from './services/geminiService';
import { HealthBar } from './components/HealthBar';
import { LogWindow } from './components/LogWindow';
import { Swords, Shield, Heart, Zap, RefreshCw, Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [player, setPlayer] = useState<Player>(INITIAL_PLAYER);
  const [enemy, setEnemy] = useState<Enemy | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [logs, setLogs] = useState<CombatLogEntry[]>([]);
  const [turnCounter, setTurnCounter] = useState(0);

  // Helper to add logs
  const addLog = (message: string, type: CombatLogEntry['type'] = 'info') => {
    setLogs(prev => [...prev, { id: Date.now().toString() + Math.random(), message, type }]);
  };

  // Start a new game / specific fight
  const startEncounter = async () => {
    setGameState(GameState.LOADING_ENEMY);
    setLogs([]); // Clear logs for new fight
    addLog(`Searching for a foe (Level ${player.level})...`, 'system');
    
    const newEnemy = await generateEnemy(player.level);
    setEnemy(newEnemy);
    setGameState(GameState.PLAYER_TURN);
    setTurnCounter(1);
    addLog(`A wild ${newEnemy.name} appeared!`, 'system');
    addLog(newEnemy.description, 'info');
  };

  // Check for death/victory
  useEffect(() => {
    if (!enemy) return;

    if (enemy.hp <= 0 && gameState !== GameState.VICTORY) {
      setGameState(GameState.VICTORY);
      handleVictory(enemy);
    } else if (player.hp <= 0 && gameState !== GameState.DEFEAT) {
      setGameState(GameState.DEFEAT);
    }
  }, [enemy?.hp, player.hp]);

  const handleVictory = (defeatedEnemy: Enemy) => {
    addLog(`${defeatedEnemy.name} was defeated!`, 'system');
    
    // XP Logic
    const xpGain = defeatedEnemy.xpReward;
    let newXp = player.xp + xpGain;
    let newLevel = player.level;
    let newMaxHp = player.maxHp;
    let newXpToNext = player.xpToNext;
    let leveledUp = false;

    // Level up loop
    while (newXp >= newXpToNext) {
      newXp -= newXpToNext;
      newLevel++;
      newMaxHp = Math.floor(newMaxHp * 1.2);
      newXpToNext = Math.floor(newXpToNext * 1.5);
      leveledUp = true;
    }

    setPlayer(prev => ({
      ...prev,
      hp: Math.min(prev.maxHp, prev.hp + Math.floor(prev.maxHp * 0.3)), // Heal 30% on win
      xp: newXp,
      level: newLevel,
      maxHp: newMaxHp,
      xpToNext: newXpToNext,
      potions: Math.min(prev.maxPotions, prev.potions + (Math.random() > 0.7 ? 1 : 0)) // Chance for potion
    }));

    addLog(`Gained ${xpGain} XP.`, 'system');
    if (leveledUp) {
      addLog(`LEVEL UP! You are now level ${newLevel}. Max HP increased!`, 'system');
    }
  };

  // Player Actions
  const handleAttack = (attackIndex: number) => {
    if (gameState !== GameState.PLAYER_TURN || !enemy) return;

    const attack = ATTACKS[attackIndex];
    let multiplier = 1;
    let effectiveness = "";

    // Type match check
    if (TYPE_CHART[attack.element] === enemy.element) {
      multiplier = 2.0;
      effectiveness = "It's super effective! 🔥";
    } else if (WEAKNESS_CHART[attack.element] === enemy.element) {
      multiplier = 0.5;
      effectiveness = "It's not very effective...";
    }

    // Critical Hit
    const isCrit = Math.random() < 0.1; // 10% crit chance
    if (isCrit) multiplier *= 1.5;

    // Damage Calc
    const damage = Math.ceil((attack.baseDamage + (player.level * 2)) * multiplier);

    setEnemy(prev => prev ? { ...prev, hp: Math.max(0, prev.hp - damage) } : null);
    
    addLog(`You used ${attack.name}! ${isCrit ? 'CRITICAL HIT! ' : ''}${effectiveness} Dealt ${damage} damage.`, 'player-damage');

    if (enemy.hp - damage > 0) {
      setTimeout(() => setGameState(GameState.ENEMY_TURN), 1000);
    }
  };

  const handleHeal = () => {
    if (gameState !== GameState.PLAYER_TURN || player.potions <= 0) return;

    const healAmount = Math.floor(player.maxHp * 0.5);
    setPlayer(prev => ({
      ...prev,
      hp: Math.min(prev.maxHp, prev.hp + healAmount),
      potions: prev.potions - 1
    }));
    
    addLog(`You drank a potion. Recovered ${healAmount} HP.`, 'heal');
    setTimeout(() => setGameState(GameState.ENEMY_TURN), 1000);
  };

  // Enemy Turn Logic
  const processEnemyTurn = useCallback(() => {
    if (!enemy) return;

    addLog(`${enemy.name} is attacking!`, 'enemy-damage');

    // Simple Enemy AI: Just attack for now
    let multiplier = 1;
    
    // Enemy element advantage vs Player (Assume player is neutral physical mostly, but could change if we added player armor types)
    // For now, let's just use raw power scaling
    const damage = Math.floor(enemy.attackPower * (0.8 + Math.random() * 0.4)); // Variance 0.8-1.2

    setTimeout(() => {
      setPlayer(prev => ({ ...prev, hp: Math.max(0, prev.hp - damage) }));
      addLog(`${enemy.name} hits you for ${damage} damage!`, 'enemy-damage');
      setTurnCounter(prev => prev + 1);
      
      if (player.hp - damage > 0) {
        setGameState(GameState.PLAYER_TURN);
      }
    }, 1000);
  }, [enemy, player.hp]);

  // Trigger Enemy Turn
  useEffect(() => {
    if (gameState === GameState.ENEMY_TURN) {
      processEnemyTurn();
    }
  }, [gameState, processEnemyTurn]);


  // --- RENDER HELPERS ---

  const renderMenu = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in p-8 text-center">
      <h1 className="text-6xl fantasy-font text-yellow-500 drop-shadow-lg mb-4">Elemental Quest</h1>
      <p className="text-gray-400 max-w-md text-lg">
        Embark on an endless journey. Fight AI-generated monsters, master the elements, and survive.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl w-full max-w-sm">
        <h3 className="text-xl font-bold text-white mb-4">Hero Stats</h3>
        <div className="flex justify-between text-gray-300 mb-2"><span>Level:</span> <span className="text-yellow-400">{player.level}</span></div>
        <div className="flex justify-between text-gray-300 mb-2"><span>XP:</span> <span>{player.xp} / {player.xpToNext}</span></div>
        <div className="flex justify-between text-gray-300"><span>Potions:</span> <span className="text-red-400">{player.potions}</span></div>
      </div>
      <button 
        onClick={startEncounter}
        className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-bold rounded-lg text-xl shadow-lg hover:scale-105 transition-transform border border-yellow-500"
      >
        Enter the Dungeon
      </button>
    </div>
  );

  const renderVictory = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-6 animate-fade-in bg-black bg-opacity-80 absolute inset-0 z-50">
      <Trophy className="w-24 h-24 text-yellow-400 animate-bounce" />
      <h2 className="text-5xl fantasy-font text-white">Victory!</h2>
      <p className="text-gray-300 text-xl">The enemy has been vanquished.</p>
      <div className="flex gap-4">
        <button 
          onClick={startEncounter}
          className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white rounded font-bold transition-colors flex items-center gap-2"
        >
          <Swords size={20}/> Next Battle
        </button>
        <button 
          onClick={() => setGameState(GameState.MENU)}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded font-bold transition-colors"
        >
          Return to Town
        </button>
      </div>
    </div>
  );

  const renderDefeat = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-6 animate-fade-in bg-red-900 bg-opacity-90 absolute inset-0 z-50">
      <h2 className="text-6xl fantasy-font text-white mb-2">You Died</h2>
      <p className="text-gray-200 text-lg">Your journey ends here, Hero.</p>
      <button 
        onClick={() => {
           setPlayer(INITIAL_PLAYER);
           setGameState(GameState.MENU);
        }}
        className="px-8 py-4 bg-white text-red-900 rounded font-bold text-xl hover:bg-gray-200 transition-colors"
      >
        Restart Legacy
      </button>
    </div>
  );

  const getElementColor = (el: ElementType) => {
    switch (el) {
      case ElementType.FIRE: return 'text-red-500';
      case ElementType.WATER: return 'text-blue-500';
      case ElementType.NATURE: return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  const getElementIcon = (el: ElementType) => {
    switch (el) {
      case ElementType.FIRE: return '🔥';
      case ElementType.WATER: return '💧';
      case ElementType.NATURE: return '🌿';
      default: return '⚔️';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 flex flex-col items-center py-6 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      {/* Main Container */}
      <div className="w-full max-w-4xl h-[85vh] bg-black bg-opacity-80 border border-gray-800 rounded-xl shadow-2xl relative flex flex-col overflow-hidden">
        
        {gameState === GameState.MENU && renderMenu()}
        
        {/* Combat Screen */}
        {(gameState !== GameState.MENU) && (
          <>
            {/* Header / Top Bar */}
            <div className="p-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white border-2 border-yellow-400">
                  {player.level}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">{player.name}</h3>
                  <div className="text-xs text-gray-400">XP: {player.xp}/{player.xpToNext}</div>
                </div>
              </div>
              
              <div className="w-1/3">
                 <HealthBar current={player.hp} max={player.maxHp} label="HP" color="bg-green-600" />
              </div>
            </div>

            {/* Main Battle Area */}
            <div className="flex-1 relative flex flex-col md:flex-row items-center justify-between p-8 gap-8">
               
               {/* Player Avatar (Abstract) */}
               <div className="hidden md:flex flex-col items-center opacity-80 animate-pulse">
                  <Shield size={120} className="text-blue-400" />
                  <div className="mt-4 bg-blue-900 px-3 py-1 rounded-full text-xs font-bold text-blue-200 border border-blue-500">
                    YOU
                  </div>
               </div>

               {/* Center VS or Turn Indicator */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-gray-700 select-none opacity-20 z-0">
                  VS
               </div>

               {/* Enemy Display */}
               <div className="flex flex-col items-center w-full md:w-1/2 z-10">
                 {gameState === GameState.LOADING_ENEMY ? (
                   <div className="flex flex-col items-center animate-pulse">
                      <RefreshCw className="animate-spin mb-4 text-yellow-500" size={48} />
                      <p className="text-xl fantasy-font">Summoning Foe...</p>
                   </div>
                 ) : enemy ? (
                   <div className="w-full bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl animate-fade-in-up">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-red-100 flex items-center gap-2">
                             {enemy.name}
                             <span className="text-sm bg-gray-700 px-2 py-1 rounded border border-gray-600">
                               {getElementIcon(enemy.element)}
                             </span>
                          </h2>
                          <p className={`text-sm font-semibold ${getElementColor(enemy.element)}`}>
                             {enemy.element} Type
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-400 block">Threat Level</span>
                          <span className="text-xl font-mono text-red-400">⚔ {enemy.attackPower}</span>
                        </div>
                      </div>
                      
                      {/* Placeholder Visual for Enemy */}
                      <div className="w-full h-48 bg-gray-900 rounded mb-4 overflow-hidden relative group">
                        <img 
                          src={`https://picsum.photos/seed/${enemy.name + player.level}/400/300?grayscale&blur=2`} 
                          alt="Enemy" 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl drop-shadow-lg grayscale">👾</span>
                         </div>
                      </div>

                      <HealthBar current={enemy.hp} max={enemy.maxHp} color="bg-red-600" />
                      
                      <p className="mt-4 text-sm text-gray-400 italic border-t border-gray-700 pt-2">
                        "{enemy.description}"
                      </p>
                   </div>
                 ) : null}
               </div>
            </div>

            {/* Bottom Controls & Logs */}
            <div className="p-4 bg-gray-900 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 h-1/3 min-h-[250px]">
               
               {/* Controls */}
               <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2 h-full">
                    {ATTACKS.map((attack, index) => (
                      <button
                        key={attack.name}
                        onClick={() => handleAttack(index)}
                        disabled={gameState !== GameState.PLAYER_TURN}
                        className={`
                          ${attack.color} text-white p-3 rounded shadow-lg flex flex-col items-center justify-center gap-1
                          disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95
                        `}
                      >
                        <span className="text-2xl">{attack.icon}</span>
                        <span className="font-bold uppercase text-sm tracking-wide">{attack.name}</span>
                        <span className="text-[10px] opacity-75">{attack.element} Dmg</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Potion Button */}
                  <button
                    onClick={handleHeal}
                    disabled={gameState !== GameState.PLAYER_TURN || player.potions === 0}
                    className="mt-2 bg-pink-700 hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded flex items-center justify-center gap-2 font-bold shadow-lg transition-colors"
                  >
                    <Heart size={18} className="fill-current" />
                    Use Potion ({player.potions})
                  </button>
               </div>

               {/* Log Window */}
               <div className="h-full">
                  <LogWindow logs={logs} />
               </div>
            </div>

            {/* Overlays */}
            {gameState === GameState.VICTORY && renderVictory()}
            {gameState === GameState.DEFEAT && renderDefeat()}
          </>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Turn: {turnCounter} | Powered by Gemini
      </div>
    </div>
  );
};

export default App;