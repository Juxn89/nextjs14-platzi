import Image from 'next/image'
import { IProducts } from './Products.interface';
import styles from './MainProducts.module.sass'

const getProducts = async (): Promise<IProducts[]> => {
	try {
		const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
			headers: {
				'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ''
			}
		})

		const { products }: { products: IProducts[] } = await response.json()

		return products;
	} catch (error) {
		console.error('getProducts', error)
		return []
	}
}

export const MainProducts = async () => {
	const products = await getProducts()

  return (
    <section className={ styles.MainProducts }>
      <h3>✨ New products released!</h3>
			<div className={ styles.MainProducts__grid }>
				{
					products.map(product => {
						return (
							<article key={product.id}>
								<p>{ product.title }</p>
								<Image src={ product.images[0].src } fill alt={ product.title } loading='eager' />
							</article>
						)
					})
				}
			</div>
    </section>
  )
}
