import { ProductsWrapper } from "@/components/Store/ProductsWrapper";
import { getProducts } from "@/services/shopify";

export default async function Store () {
	const products = await getProducts()

	return(
		<ProductsWrapper products={products}/>
	)
}