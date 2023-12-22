import styles from './Search.module.css'

interface Props {
	children: React.ReactNode;
}

export const Search = ({ children }: Props): React.ReactElement => {
	return <section className={styles.search}>{children}</section>
}