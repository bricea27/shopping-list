import styles from './Search.module.css'

interface Props {
	children: React.ReactNode;
}

export const SearchResults = ({ children }: Props): React.ReactElement => {
	return <ul className={styles.results}>{children}</ul>
}