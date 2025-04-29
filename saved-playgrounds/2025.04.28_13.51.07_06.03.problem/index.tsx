import { createRoot } from 'react-dom/client'

export function Box({
	size,
	...otherProps
}: React.ComponentProps<'div'> & {
	size?: 'small' | 'medium' | 'large'
}) {

	const sizeClassName = size ? `box--${size}` : ''

	return (
		<div
			{...otherProps}
			style={{ fontStyle: 'italic', ...otherProps.style }}
			className={`box ${otherProps.className} ${sizeClassName}`}
		/>
	)
}

function App() {
	return (
		<div>
			<Box size="small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box size="large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
