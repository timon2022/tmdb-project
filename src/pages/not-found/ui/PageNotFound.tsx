import { Link } from 'react-router';
import styles from './NotFound.module.css';
const PageNotFound = () => {
    return (
        <>
            <div className={styles.container}>
                {/* Декоративные фоновые круги */}
                <div className={styles.bgCircle1}></div>
                <div className={styles.bgCircle2}></div>

                <div className={styles.content}>
                    {/* Иллюстрация (SVG) */}
                    <div className={styles.illustration}>
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="100" cy="100" r="80" stroke="#6C63FF" strokeWidth="4" strokeDasharray="10 10" />
                            <circle cx="100" cy="100" r="60" stroke="#FF6584" strokeWidth="3" strokeDasharray="8 8" />
                            <circle cx="100" cy="100" r="40" fill="#6C63FF" fillOpacity="0.2" />
                            <path
                                d="M100 40 L110 70 L140 70 L115 90 L125 120 L100 105 L75 120 L85 90 L60 70 L90 70 L100 40Z"
                                fill="#FFD166"
                            />
                            <circle cx="100" cy="100" r="20" fill="#FFFFFF" fillOpacity="0.8" />
                            <path
                                d="M85 95 L95 105 L115 85"
                                stroke="#6C63FF"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h1 className={styles.title}>404</h1>
                    <p className={styles.text}>
                        <span className={styles.emoji}>🚀</span> Ой! Кажется, вы заблудились в космосе.
                    </p>
                    <Link to="/" className={styles.link}>
                        Вернуться на Землю
                    </Link>
                </div>
            </div>
        </>
    )
}
export default PageNotFound