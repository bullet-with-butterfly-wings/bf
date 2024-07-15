import React from 'react';
import styles from './Sidebar.module.css';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2>MyApp</h2>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <FaHome className={styles.icon} />
          <span>Home</span>
        </li>
        <li className={styles.navItem}>
          <FaUser className={styles.icon} />
          <span>Profile</span>
        </li>
        <li className={styles.navItem}>
          <FaCog className={styles.icon} />
          <span>Settings</span>
        </li>
        <li className={styles.navItem}>
          <FaSignOutAlt className={styles.icon} />
          <span>Logout</span>
        </li>
      </ul>
      <div className={styles.footer}>
        <p>&copy; 2024 MyApp</p>
      </div>
    </div>
  );
};

export default Sidebar;
