import styles from './Items.module.css'

interface Props {
	children: React.ReactNode;
	onClick: () => void;
}

export const Item = ({ children, onClick }: Props): React.ReactElement => {
	return (
		<li className={styles.item} onClick={onClick}>
			{children}
		</li>
	)
}