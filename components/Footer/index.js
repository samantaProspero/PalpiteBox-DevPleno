import React from 'react';
import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <p>Projeto desenvolvido por Samanta</p>
        <div className={styles.images}>
          <img src="/logo_semana_fsm.png" alt="logo-devPleno"/>
          <img src="/logo_devpleno.png" alt="logo-devPleno"/>
        </div>
      </div>
      <div className="menu">
        
      </div>
    </div>
  )
};

export default Footer;