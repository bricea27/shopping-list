import styles from './Items.module.css'

export const ItemDelete = ({ ...props }): React.ReactElement => {
	return (
		<span className={styles.delete} {...props}>❌</span>
	)
}