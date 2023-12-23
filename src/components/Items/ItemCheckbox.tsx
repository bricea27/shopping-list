interface Props {
	checked: boolean;
}

export const ItemCheckbox = ({ checked }: Props): React.ReactElement => {
	return (
		<span>{checked ? '✅' : '⬜'}</span>
	)
}