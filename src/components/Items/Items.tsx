import styles from './Items.module.css'

interface Props {
	children: React.ReactNode;
}

export const Items = ({ children }: Props): React.ReactElement => {
	return <ul className={styles.items}>{children}</ul>
}