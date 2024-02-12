import Link from "next/link"
import { getCollections } from "@/services/shopify"

export default async function Layout({children}: { children: React.ReactNode }) {
	const collections = await getCollections()

	return(
		<main>
			<nav>
				{
					collections.map(collection => (
						<Link key={collection.id} href={ `/store/category/${collection.handle}` }>
							{ collection.title }
						</Link>
					))
				}
			</nav>
			{ children }
		</main>
	)
}