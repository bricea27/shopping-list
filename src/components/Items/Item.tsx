import styles from './Items.module.css'

interface Props {
	children: React.ReactNode;
}

export const Item = ({ children }: Props): React.ReactElement => {
	return <li className={styles.item}>{children}</li>
}