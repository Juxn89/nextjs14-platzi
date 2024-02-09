import { getProducts } from "@/services/shopify"

export async function GET() {
    const message = 'Hello from Api :)'
    const products = await getProducts();
    return Response.json({ message, products })
}