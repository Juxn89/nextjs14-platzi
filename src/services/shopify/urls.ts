import { env } from "@/config/env";

export const shopifyURLs = {
    products: {
      'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`
    },
		collections: {
			'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`
		}
}