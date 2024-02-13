import Image from 'next/image'
import { getMainProducts } from '@/services/shopify/products'
import { IProducts } from './Products.interface'
import styles from './MainProducts.module.sass'

export const MainProducts = async () => {

	const products: IProducts[] = await getMainProducts()

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
