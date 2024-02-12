import { env } from "@/config/env";

export const shopifyURLs = {
    products: {
      'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
			'byId': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products/${id}.json`
    },
		collections: {
			'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
			'product': (id: number) => `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
		}
}