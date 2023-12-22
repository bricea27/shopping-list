import styles from './Result.module.css'

interface Props {
	children: React.ReactNode;
}

export const Result = ({ children }: Props): React.ReactElement => {
	return <li className={styles.root}>{children}</li>
}