import { ProductsWrapper } from "@/components/Store/ProductsWrapper"
import { getProducts } from "@/services/shopify"

interface Categories {
	params: {
		categories: string[]
	},
	searchParams?: string
}

export default async function Categories(props: Categories) {
	console.log(props)
	const { categories } = props.params
	const products = await getProducts();

	return(
		<ProductsWrapper products={products }/>
	)
}