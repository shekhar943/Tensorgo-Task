import React, { useState } from 'react';

const QuerySection = ({ title, section, queries, addQuery, includePrice }) => {
  const [newQuery, setNewQuery] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleAddQuery = () => {
    if (newQuery.trim() !== '') {
      addQuery(section, newQuery, newPrice);
      setNewQuery('');
      setNewPrice('');
    }
  };

  return (
    <section id={section} className="query-section">
      <h2>{title}</h2>
      <ul>
        {queries.map((queryObj, index) => (
          <li key={index}>
            {queryObj.query}
            {includePrice && queryObj.price && ` - $${queryObj.price}`}
          </li>
        ))}
      </ul>
      <div className="query-form">
        <textarea
          placeholder={`Type your ${title.toLowerCase()} here...`}
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
        />
        {includePrice && (
          <input
            type="number"
            placeholder="Enter price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        )}
        <button onClick={handleAddQuery}>Submit</button>
      </div>
    </section>
  );
};

export default QuerySection;
