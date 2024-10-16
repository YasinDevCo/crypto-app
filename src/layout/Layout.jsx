import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Yasin Crypto</h1>
        
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Yasin with ❤️</p>
    </footer>
    </>
  )
}

export default Layout