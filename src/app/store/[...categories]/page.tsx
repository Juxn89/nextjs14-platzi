import { ProductsWrapper } from "@/components/Store/ProductsWrapper"
import { getProducts } from "@/services/shopify"
import { getCollections, getProductsByCollection } from "@/services/shopify/collections"

interface Categories {
	params: {
		categories: string[]
	},
	searchParams?: string
}

export default async function Categories(props: Categories) {
	// console.log(props)
	const { categories } = props.params

	let products = [];
	const collections = await getCollections()
	const selectedCollection = collections.find((collection) => collection.handle === categories[1])

	if(selectedCollection) {
		products = await getProductsByCollection(selectedCollection.id)
	}
	else {
		products = await getProducts()
	}

	return(
		<ProductsWrapper products={products}/>
	)
}