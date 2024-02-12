import { getProducts } from "@/services/shopify/products"

export async function GET() {
    const message = 'Hello from Api :)'
    const products = await getProducts();
    return Response.json({ message, products })
}