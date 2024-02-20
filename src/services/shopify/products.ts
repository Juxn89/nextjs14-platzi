import { IProducts } from "@/components/Home/MainProducts/Products.interface";
import { shopifyURLs } from "./urls";
import { env } from "@/config/env";

// Shopify DOCS: https://shopify.dev/docs/api/admin-rest/2023-10/resources/smartcollection
export const getProducts = async (id?: string): Promise<ProductType[]> => {
	try {
		const apiUrl = id ? `${shopifyURLs.products.byId(id)}` : shopifyURLs.products.all;
		const response = await fetch(apiUrl, {
			headers: {
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
			}
		})

		const products = await TransformResponse(response)
		
		const transformedProduct: ProductType[] = products.map(product => {
			return {
				id: product.id.toString(),
				title: product.title,
				description: product.body_html,
				price: product.variants[0].price,
				image: product.image.src,
				handle: product.handle,
				tags: product.tags,
				quantity: product.variants[0].inventory_quantity,
				gql_id: product.variants[0].admin_graphql_api_id
			}
		})

		return transformedProduct;
	} catch (error) {
		console.error('getProducts', error)
		return []
	}
}

const TransformResponse = async (response: Response): Promise<IProducts[]> => {
	const data = await response.json()
	const { products } = data;
	const { product } = data;

	if(product)
		return [product]

	return products
}

export const getMainProducts = async () => {
	const response = await fetch(shopifyURLs.products.mainProducts, {
	  headers: new Headers({
		'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
	  }),
		cache: 'force-cache',
		next: {tags: ['main-products'] }
	})

	const {products} = await response.json()

	return products
  }