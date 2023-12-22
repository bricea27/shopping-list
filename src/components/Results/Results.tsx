import styles from './Results.module.css'

interface Props {
	children: React.ReactNode;
}

export const Results = ({ children }: Props): React.ReactElement => {
	return <ul className={styles.root}>{children}</ul>
}