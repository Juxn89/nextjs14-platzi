import Image from 'next/image'
import styles from './Description.module.sass'

export const Description = () => {
  return (
    <section className={ styles.Description }>
			<Image src='/images/description.jpeg' alt='products marketplace' width={320} height={320}/>
			<div className={ styles.Description__text }>
				<h2>Bring the future today</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perferendis soluta earum voluptate reprehenderit eius nostrum sed labore nam, vel vero quod! Sint ipsam quas deserunt voluptatibus, odit error dolor!</p>
			</div>
		</section>
  )
}
