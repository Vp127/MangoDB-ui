import React, { useState } from 'react';
import KeyValueControls from './KeyValueControls';
import SnapshotControls from './SnapshotControls';
import SnapshotTimeline from './SnapshotTimeline';
import './App.css';

export default function App() {
  const [db, setDb] = useState({});
  const [snapshots, setSnapshots] = useState({});
  const [showData, setShowData] = useState(false);

  const toggleShowData = () => {
    setShowData(prev => !prev);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🥭MangoDB</h1>
      <div className="sections">
        <KeyValueControls db={db} setDb={setDb} />
      </div>

      {/* <button className="show-btn" onClick={toggleShowData}>
        {showData ? 'Hide Key-Value Pairs' : 'Show All Key-Value Pairs'}
      </button> */}

      {/* {showData && (
        <div className="data-box">
          <h2>📋 Current Key-Value Pairs</h2>
          {Object.keys(db).length === 0 ? (
            <p><i>No data available.</i></p>
          ) : (
            <ul>
              {Object.entries(db).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      )} */}
      <SnapshotControls db={db} setSnapshots={setSnapshots} />
      <SnapshotTimeline snapshots={snapshots} setDb={setDb} />
    </div>
  );
}
