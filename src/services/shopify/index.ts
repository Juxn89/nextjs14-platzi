import { IProducts } from "@/components/Home/MainProducts/Products.interface";
import { shopifyURLs } from "./urls";
import { env } from "@/config/env";

export const getProducts = async (): Promise<IProducts[]> => {
    try {
        const response = await fetch(shopifyURLs.products.all, {
            headers: {
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            }
        })

        const { products }: { products: IProducts[] } = await response.json()

        return products;
    } catch (error) {
        console.error('getProducts', error)
        return []
    }
}