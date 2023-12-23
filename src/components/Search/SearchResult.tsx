import styles from './Search.module.css'

export const SearchResult = ({ ...props }): React.ReactElement => {
	return <li className={styles.result} {...props} />
}