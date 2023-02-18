import React from 'react';

import { Toast } from '../../';

export const App: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '3rem' }}>
      <Toast
        emoji="🚧"
        emojiBackground="#F3E45C"
        text={['@hanseo0507/react-toast', 'Awesome Notification']}
      />
      <Toast
        emoji="🚨"
        emojiBackground="#F3655C"
        text={['@hanseo0507/react-toast', 'Awesome Notification']}
      />
      <Toast
        emoji="🎉"
        emojiBackground={['70deg', '#ECA0FF', '#778DFF']}
        text={['@hanseo0507/react-toast', 'Awesome Notification']}
      />
    </div>
  );
};
