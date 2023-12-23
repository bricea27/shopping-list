import styles from './Items.module.css'

interface Props {
	checked: boolean;
	children: React.ReactNode;
}

export const ItemLabel = ({ checked, children}: Props): React.ReactElement => {
	return (
		<p {...checked && { className: styles.checked }}>{children}</p>
	)
}