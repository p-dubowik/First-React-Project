import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navContent}>
                <a href="/">
                    <i className='fa fa-tasks'></i>
                </a>

                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/favorite'>Favorite</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;