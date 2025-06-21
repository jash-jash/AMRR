import React, { useEffect, useState } from 'react';
import './App.css';
import ItemModal from './ItemModal';

const Viewitems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('items');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="home">
      <div>
        <h2>View Items</h2>
        <hr />
        {items.length === 0 ? (
          <p>No items found. Please add some.</p>
        ) : (
          <div className="items-grid">
            {items.map((item, index) => (
              <div
                key={index}
                className="item-card"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{item.name}</h3>
                <img src={item.coverImage} alt="cover" width="200" />
              </div>
            ))}
          </div>
        )}
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </div>
  );
};

export default Viewitems;
