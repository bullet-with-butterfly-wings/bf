import React, { useState } from 'react';
import styles from './List.module.css';

const List = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const items = [
    { id: 1, title: 'Item A', content: 'This is the content for Item A.' },
    { id: 2, title: 'Item B', content: 'This is the content for Item B.' },
    { id: 3, title: 'Item C', content: 'This is the content for Item C.' },
    { id: 4, title: 'Item D', content: 'This is the content for Item D.' },
    { id: 5, title: 'Item E', content: 'This is the content for Item E.' },
    { id: 6, title: 'Item F', content: 'This is the content for Item F.' },
    { id: 7, title: 'Item G', content: 'This is the content for Item G.' },
    
    // Add more items as needed
  ];

  const toggleItem = (id) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className={styles.list}>
      <h2>List</h2>
      <div className={styles.scrollableList}>
        {items.map(item => (
          <div key={item.id} className={styles.listItem}>
            <div className={styles.itemHeader} onClick={() => toggleItem(item.id)}>
              {item.title}
            </div>
            {expandedItems[item.id] && (
              <div className={styles.itemContent}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
