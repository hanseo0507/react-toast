import React, { useState } from 'react';

import { useToast, ToastPosition, ToastType } from '../../';

export const App: React.FC = () => {
  const toast = useToast();
  const [type, setType] = useState<ToastType | 'none'>('none');

  return (
    <div style={{ width: '100%', height: '100%', padding: '3rem' }}>
      <div style={{ display: 'flex', color: 'white', gap: '12px' }}>
        <input
          id="none"
          type="radio"
          name="none"
          value="none"
          checked={type === 'none'}
          onChange={(e) => setType(e.target.value as 'none')}
        />
        none
        {Object.values(ToastType).map((_type) => (
          <>
            <input
              id={_type}
              type="radio"
              value={_type}
              name={_type}
              checked={_type === type}
              onChange={(e) => setType(e.target.value as ToastType)}
            />
            {_type}
          </>
        ))}
      </div>
      <div>
        {Object.values(ToastPosition).map((position) => (
          <button
            key={position}
            onClick={() => {
              const text = ['@hanseo0507/react-toast', 'Awesome Notification'] as [string, string];

              if (type === 'none')
                return toast(
                  { emoji: '🎉', emojiBackground: ['70deg', '#ECA0FF', '#778DFF'], text },
                  { position }
                );
              return toast[type]({ text }, { position });
            }}
          >
            {position}
          </button>
        ))}
      </div>
    </div>
  );
};
