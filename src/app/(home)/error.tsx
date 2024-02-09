'use client'

import { useEffect } from "react"

interface ErrorProps {
	error: Error,
	reset: () => void
}

export default function Error(props: ErrorProps) {
	const { error, reset } = props

	useEffect( () => {
		console.error(error)
	}, [error])

	return (
		<div style={{ padding: '10rem' }}>
			<h1>😢</h1>
			<p>Ha ocurrido un error</p>
			<button onClick={ reset }>
				Try again!
			</button>
		</div>
	)
}
