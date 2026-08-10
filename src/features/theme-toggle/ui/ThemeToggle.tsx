import { useTheme } from 'app/providers'
import styles from './ThemeToggle.module.css'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={theme === 'dark'}
            onChange={toggleTheme}
            />
            <span className={styles.slider}></span>
            <span className={styles.labelText}>
                {theme === 'dark' ? '🌙' : '☀️'}
            </span>
        </label>)
}




