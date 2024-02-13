import { ProductView } from "@/components/Product/ProductView"
import { getProducts } from "@/services/shopify"
import { redirect, useParams, useSearchParams } from "next/navigation"

interface ProductPageProps {
	searchParams: {
		id: string
	}
}

export async function generateMetadata( { searchParams }: ProductPageProps) {
	const { id } = searchParams
	const products = await getProducts(id)
	const product = products[0]

	return{
		title: product.title,
		description: product.description,
		keywords: product.tags,
		openGraph: {
			images: [ product.image ]
		}
	}
}

export default async function ProductPage(props: ProductPageProps) {
	// const params = useParams()
	// const searchParams = useSearchParams()

	const { id } = props.searchParams
	const products = await getProducts(id)
	const product = products[0]

	if(!id)
		redirect('/store')

	return <ProductView product={ product }/>
}