import React from 'react';

export default function SnapshotTimeline({ snapshots, setDb }) {
  const handleRestore = (snapName) => {
    const dir = prompt('Enter directory name to restore snapshot to:');
    if (dir) {
      const data = snapshots[snapName];
      alert('Snapshot restored to "' + dir + '"');
      setDb({ ...data });
    }
  };

  return (
    <div>
      <h2>📸 Snapshot Timeline</h2>
      {Object.entries(snapshots).sort((a, b) => b[0].localeCompare(a[0])).map(([name, data]) => (
        <div key={name} style={{ borderLeft: '4px solid #ccc', paddingLeft: '12px', marginBottom: '10px' }}>
          <div>🕑 [{new Date(parseInt(name.split('-')[1])).toLocaleString()}] {name}</div>
          <button onClick={() => handleRestore(name)}>📂 Restore</button>
          <button onClick={() => alert(JSON.stringify(data, null, 2))}>👁️ View</button>
        </div>
      ))}
    </div>
  );
}