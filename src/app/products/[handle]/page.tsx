'use client'

import { useParams, useSearchParams } from "next/navigation"

interface ProductPageProps {
	searchParams: {
		id: string
	}
}

export default function ProductPage(props) {
	const params = useParams()
	const searchParams = useSearchParams()

	console.log(params, searchParams.get("id"))
	return(
		<>
			<h1>Product Page</h1>
		</>
	)
}