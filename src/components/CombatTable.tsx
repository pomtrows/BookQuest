import React from 'react';

export const CombatTable: React.FC = () => {
  const columns = [
    '-11 ou\ninférieur', '-10 / -9', '-8 / -7', '-6 / -5', '-4 / -3', '-2 / -1',
    '0', '+1 / +2', '+3 / +4', '+5 / +6', '+7 / +8', '+9 / +10', '+11 ou\nsupérieur'
  ];

  const rows = [
    [
      { e: '0', ls: 'T' }, { e: '0', ls: 'T' }, { e: '0', ls: '8' }, { e: '0', ls: '6' }, { e: '1', ls: '6' }, { e: '2', ls: '5' },
      { e: '3', ls: '5' }, { e: '4', ls: '5' }, { e: '5', ls: '4' }, { e: '6', ls: '4' }, { e: '7', ls: '4' }, { e: '8', ls: '3' }, { e: '9', ls: '3' }
    ],
    [
      { e: '0', ls: 'T' }, { e: '0', ls: '8' }, { e: '0', ls: '7' }, { e: '1', ls: '6' }, { e: '2', ls: '5' }, { e: '3', ls: '5' },
      { e: '4', ls: '4' }, { e: '5', ls: '4' }, { e: '6', ls: '3' }, { e: '7', ls: '3' }, { e: '8', ls: '3' }, { e: '9', ls: '3' }, { e: '10', ls: '2' }
    ],
    [
      { e: '0', ls: '8' }, { e: '0', ls: '7' }, { e: '1', ls: '6' }, { e: '2', ls: '5' }, { e: '3', ls: '5' }, { e: '4', ls: '4' },
      { e: '5', ls: '4' }, { e: '6', ls: '3' }, { e: '7', ls: '3' }, { e: '8', ls: '3' }, { e: '9', ls: '2' }, { e: '10', ls: '2' }, { e: '11', ls: '2' }
    ],
    [
      { e: '0', ls: '8' }, { e: '1', ls: '7' }, { e: '2', ls: '6' }, { e: '3', ls: '5' }, { e: '4', ls: '4' }, { e: '5', ls: '4' },
      { e: '6', ls: '3' }, { e: '7', ls: '3' }, { e: '8', ls: '2' }, { e: '9', ls: '2' }, { e: '10', ls: '2' }, { e: '11', ls: '2' }, { e: '12', ls: '2' }
    ],
    [
      { e: '1', ls: '7' }, { e: '2', ls: '6' }, { e: '3', ls: '5' }, { e: '4', ls: '4' }, { e: '5', ls: '4' }, { e: '6', ls: '3' },
      { e: '7', ls: '2' }, { e: '8', ls: '2' }, { e: '9', ls: '2' }, { e: '10', ls: '2' }, { e: '11', ls: '2' }, { e: '12', ls: '1' }, { e: '14', ls: '1' }
    ],
    [
      { e: '2', ls: '6' }, { e: '3', ls: '6' }, { e: '4', ls: '5' }, { e: '5', ls: '4' }, { e: '6', ls: '3' }, { e: '7', ls: '2' },
      { e: '8', ls: '2' }, { e: '9', ls: '2' }, { e: '10', ls: '2' }, { e: '11', ls: '1' }, { e: '12', ls: '1' }, { e: '14', ls: '1' }, { e: '16', ls: '1' }
    ],
    [
      { e: '3', ls: '5' }, { e: '4', ls: '5' }, { e: '5', ls: '4' }, { e: '6', ls: '3' }, { e: '7', ls: '2' }, { e: '8', ls: '2' },
      { e: '9', ls: '1' }, { e: '10', ls: '1' }, { e: '11', ls: '1' }, { e: '12', ls: '0' }, { e: '14', ls: '0' }, { e: '16', ls: '0' }, { e: '18', ls: '0' }
    ],
    [
      { e: '4', ls: '4' }, { e: '5', ls: '4' }, { e: '6', ls: '3' }, { e: '7', ls: '2' }, { e: '8', ls: '1' }, { e: '9', ls: '1' },
      { e: '10', ls: '0' }, { e: '11', ls: '0' }, { e: '12', ls: '0' }, { e: '14', ls: '0' }, { e: '16', ls: '0' }, { e: '18', ls: '0' }, { e: 'T', ls: '0' }
    ],
    [
      { e: '5', ls: '3' }, { e: '6', ls: '3' }, { e: '7', ls: '2' }, { e: '8', ls: '0' }, { e: '9', ls: '0' }, { e: '10', ls: '0' },
      { e: '11', ls: '0' }, { e: '12', ls: '0' }, { e: '14', ls: '0' }, { e: '16', ls: '0' }, { e: '18', ls: '0' }, { e: 'T', ls: '0' }, { e: 'T', ls: '0' }
    ],
    [
      { e: '6', ls: '0' }, { e: '7', ls: '0' }, { e: '8', ls: '0' }, { e: '9', ls: '0' }, { e: '10', ls: '0' }, { e: '11', ls: '0' },
      { e: '12', ls: '0' }, { e: '14', ls: '0' }, { e: '16', ls: '0' }, { e: '18', ls: '0' }, { e: 'T', ls: '0' }, { e: 'T', ls: '0' }, { e: 'T', ls: '0' }
    ]
  ];

  return (
    <div className="my-8 overflow-x-auto overflow-y-auto max-h-[60vh] custom-scrollbar border border-[#d4af37]/40 rounded-lg bg-black/80 p-0 relative shadow-[0_0_15px_rgba(212,175,55,0.15)]">
      <h3 className="text-xl font-bold text-center text-[#d4af37] py-4 bg-black/90 sticky left-0 border-b border-[#d4af37]/40 m-0" style={{ fontFamily: 'Cinzel, serif' }}>Table des coups portés</h3>
      <table className="w-full text-xs sm:text-sm text-center border-collapse">
        <thead className="sticky top-0 z-20 bg-[#1a1a1a] shadow-md">
          <tr>
            <th className="border border-gray-600 p-2 text-gray-400 bg-[#1a1a1a] whitespace-pre-wrap sticky left-0 z-30 shadow-[2px_0_5px_rgba(0,0,0,0.5)]">Quotient d'attaque →<br/>Dé ↓</th>
            {columns.map((col, i) => (
              <th key={i} className="border border-gray-600 p-2 text-[#d4af37] bg-[#1a1a1a] whitespace-pre-wrap min-w-[70px]">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-800/50 transition-colors">
              <td className="border border-gray-600 p-2 font-bold text-gray-300 bg-[#1a1a1a] sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.5)]">
                {rowIndex === 9 ? '0' : rowIndex + 1}
              </td>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-600 p-1">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <span className="text-red-400 flex justify-between w-full px-1">
                      <span>E:</span> <span className="font-bold">{cell.e === 'T' ? 'T' : `-${cell.e}`}</span>
                    </span>
                    <hr className="w-full border-gray-700 border-t-1" />
                    <span className="text-green-400 flex justify-between w-full px-1">
                      <span>LS:</span> <span className="font-bold">{cell.ls === 'T' ? 'T' : `-${cell.ls}`}</span>
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-4 bg-black/90 sticky left-0 border-t border-gray-600 flex justify-around text-xs text-gray-400">
        <span><strong className="text-red-400">E</strong> = Ennemi</span>
        <span><strong className="text-green-400">LS</strong> = Loup Solitaire</span>
        <span><strong className="text-white">T</strong> = Tué sur le coup</span>
      </div>
    </div>
  );
};
