import React, { useState } from 'react';

export default function KeyValueControls({ db, setDb }) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [queryKey, setQueryKey] = useState('');
  const [queryResult, setQueryResult] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handlePut = () => {
    setDb(prev => ({ ...prev, [key]: value }));
    setKey('');
    setValue('');
  };

  const handleGet = () => {
    setQueryResult(db[queryKey] || 'Key not found');
    setShowResult(true);
  };

  const toggleAllPairs = () => {
    setShowAll(prev => !prev);
  };

  return (
    <div>
      <h2>Add Entry</h2>
      <div className="input-row">
        <input
          value={key}
          onChange={e => setKey(e.target.value)}
          placeholder="Key"
        />
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Value"
        />
      </div>
      <button onClick={handlePut}>Add</button>

      <h2>Get Value</h2>
      <input
        value={queryKey}
        onChange={e => setQueryKey(e.target.value)}
        placeholder="Key"
      />

      <div className="button-group">
        <button onClick={handleGet}>Get</button>
        <button onClick={toggleAllPairs}>
          {showAll ? 'Hide All Key-Value Pairs' : 'Show All Key-Value Pairs'}
        </button>
      </div>

      {showResult && <p>Value: {queryResult}</p>}

      {showAll && (
        <div className="key-value-list">
          {Object.entries(db).map(([k, v]) => (
            <div key={k} className="kv-item">
              <span>{k}:</span> {v}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
