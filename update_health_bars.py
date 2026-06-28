import re

file_path = r"C:\PROJET\Book Quest\src\components\CombatScreen.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add HealthBar component definition at the top (after imports)
health_bar_code = """
const getHealthColor = (pct: number) => {
  if (pct > 50) return 'bg-green-500';
  if (pct > 25) return 'bg-yellow-400';
  if (pct > 10) return 'bg-orange-500';
  return 'bg-red-600';
};

const HealthBar = ({ current, max }: { current: number, max: number }) => {
  const pct = Math.max(0, (current / max) * 100);
  const colorClass = getHealthColor(pct);

  return (
    <div className="flex items-center w-full my-2 relative">
      <svg viewBox="0 0 11 11" className="w-10 h-10 drop-shadow-md z-10 -mr-3 relative" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
        <path d="M2 1h2v1h1v1h1V2h2V1h2v3h1v2h-1v2h-1v1h-1v1h-1v1H5v-1H4v-1H3V8H2V6H1V4h1V1z" fill="#000"/>
        <path d="M3 2h1v1h2V2h1v2h1v2h-1v1h-1v1H5V7H4V6H3V4H2V2h1z" fill="#FF0000"/>
        <rect x="3" y="3" width="1" height="1" fill="#FFFFFF"/>
      </svg>
      <div className="flex-1 h-6 bg-black border-2 border-black rounded-r-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-white opacity-20"></div>
        <div className="absolute inset-0 bg-black"></div>
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-out border-t-2 border-white/40 border-b-2 border-black/40`}
          style={{ width: `${pct}%` }}
        ></div>
      </div>
    </div>
  );
};
"""

content = content.replace("export function CombatScreen() {", health_bar_code + "\nexport function CombatScreen() {")

# 2. Replace player health bar
old_player_hp = """          <div className="w-full h-4 bg-gray-900 border border-gray-700 rounded overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out"
              style={{ width: `${playerHealthPct}%` }}
            ></div>
          </div>"""
new_player_hp = """          <HealthBar current={character.endurance} max={character.maxEndurance} />"""
content = content.replace(old_player_hp, new_player_hp)

# 3. Replace enemy health bar
old_enemy_hp = """          <div className="w-full h-4 bg-gray-900 border border-gray-700 rounded overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-500 ease-out"
              style={{ width: `${enemyHealthPct}%` }}
            ></div>
          </div>"""
new_enemy_hp = """          <HealthBar current={enemyCurrentEndurance} max={enemyMaxEndurance} />"""
content = content.replace(old_enemy_hp, new_enemy_hp)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("CombatScreen updated with new health bars")
