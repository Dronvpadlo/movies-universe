import styles from './SpinerComponent.module.css'
export const SpinnerComponent = () => (
    <div className={styles.spinner}>
        <div className={styles.loader}>
        </div>
        <p>loading...</p>
    </div>
)