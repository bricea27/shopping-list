import styles from './Search.module.css'

export const SearchInput = ({ ...props }): React.ReactElement => {
	return <input className={styles.input} type="text" {...props} />
}