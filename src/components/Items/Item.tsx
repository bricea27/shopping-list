import styles from './Items.module.css'

interface Props {
	children: React.ReactNode;
	label: React.ReactNode;
}

export const Item = ({ children, label }: Props): React.ReactElement => {
	return (
		<li className={styles.item}>
			{children}
			<span>{label}</span>
		</li>
	)
}