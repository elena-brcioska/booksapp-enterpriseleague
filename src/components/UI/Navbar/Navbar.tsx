import styles from './styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.navbar__logo}>BookApp</h1>
        </nav>
    );
};

export default Navbar;