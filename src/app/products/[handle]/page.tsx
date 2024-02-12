import { ProductView } from "@/components/Product/ProductView"
import { getProducts } from "@/services/shopify"
import { useParams, useSearchParams } from "next/navigation"

interface ProductPageProps {
	searchParams: {
		id: string
	}
}

export default async function ProductPage(props: ProductPageProps) {
	// const params = useParams()
	// const searchParams = useSearchParams()

	const { id } = props.searchParams
	const products = await getProducts(id)
	const product = products[0]

	return <ProductView product={ product }/>
}