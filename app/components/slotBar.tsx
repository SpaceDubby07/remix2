import React from 'react';

interface SlotBarProps {
  title: string;
  filledSlots: number[];
  startLabel: string;
  endLabel: string;
  totalSlots?: number;
}

const SlotBar: React.FC<SlotBarProps> = ({
  title,
  filledSlots,
  startLabel,
  endLabel,
  totalSlots = 5,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-600">{startLabel}</span>
          <span className="text-xs text-gray-600">{endLabel}</span>
        </div>
        <div className="flex justify-between items-center">
          {Array.from({ length: totalSlots }, (_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-12 h-6 rounded border-2 ${
                  filledSlots.includes(index)
                    ? 'bg-blue-500 border-blue-600'
                    : 'bg-gray-200 border-gray-300'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotBar;
