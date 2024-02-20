import Chat from "@/components/chat/chat";
import { getProducts } from "@/services/shopify";
import { createAgent } from "@/utils/openai/createAgent";

export default async function ChatPage() {
	const products = await getProducts()
	const productsTitles = products.map(product => product.title)
	const flatProductsTitle = productsTitles.join('\n')

	const agent = createAgent(flatProductsTitle)

	return(
		<>
			<h1>ChatBot</h1>
			<Chat agent={ agent }/>
		</>
	)
}