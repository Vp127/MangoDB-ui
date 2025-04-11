import React, { useState } from 'react';

export default function SnapshotControls({ db, setSnapshots }) {
  const [message, setMessage] = useState('');

  const handleSnapshot = () => {
    const name = 'snap-' + Date.now();
    setSnapshots(prev => ({ ...prev, [name]: JSON.parse(JSON.stringify(db)) }));
    setMessage('Snapshot taken: ' + name);
  };

  return (
    <div>
      <h2>Snapshot Controls</h2>
      <button onClick={handleSnapshot}>Take Snapshot</button>
      <p>{message}</p>
    </div>
  );
}