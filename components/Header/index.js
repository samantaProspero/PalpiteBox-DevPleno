import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <img src="/logo.png" alt="logo"/>
        </div>
      </div>
      <div className={styles.menu}>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a>Pesquisa</a>
        </Link>
      </div>
    </>
  )
};

export default Header;