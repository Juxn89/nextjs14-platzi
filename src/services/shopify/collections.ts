import { shopifyURLs } from "./urls";
import { env } from "@/config/env";
import { SmartCollection, TransformedCollections } from "@/interfaces/Collections.interface";

// Shopify DOCS: https://shopify.dev/docs/api/admin-rest/2023-10/resources/smartcollection
export const getCollections = async (): Promise<TransformedCollections[] | []> => {
	try {
		const response = await fetch(shopifyURLs.collections.all, {
			headers: {
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
			}
		})

		const { smart_collections }: { smart_collections: SmartCollection[] } =  await response.json()
		const transformedCollections = smart_collections.map( (collection: SmartCollection): TransformedCollections => {
			return {
				id: collection.id,
				title: collection.title,
				handle: collection.handle
			}
		})

		return transformedCollections;
	} catch (error) {
		console.error('getCollections', error)
		return [];
	}
}

export const getProductsByCollection = async (id: number) => {
	try {
		const respose = await fetch(shopifyURLs.collections.product(id), {
			headers: {
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
			}
		});

		const { products } = await respose.json()
		return products;
	} catch (error) {

	}
}