import Image from 'next/image'
import styles from './MainProducts.module.sass'
import { getProducts } from '@/services/shopify'

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
