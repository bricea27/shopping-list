import styles from './Search.module.css'

interface Props {
	children: React.ReactNode;
}

export const SearchResult = ({ children }: Props): React.ReactElement => {
	return <li className={styles.result}>{children}</li>
}