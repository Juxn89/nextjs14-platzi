'use client'

import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames/bind'
import { PLACEHOLDER_IMAGE_BLUR } from '@/common'
import styles from './Description.module.sass'

export const Description = () => {
	const [hasBorder, setBorder] = useState(false);
	const handleClick = () => setBorder(!hasBorder)

	const context = classNames.bind(styles)
	const buttonStyles = context('Description__button', {
		'Description__button--border': hasBorder
	})

  return (
    <section className={ styles.Description }>
			<button onClick={ handleClick } className={ buttonStyles }>
				<div className={ styles.Description__imageContainer }>
					<Image src='/images/description.jpeg' alt='products marketplace' fill placeholder='blur' blurDataURL={ PLACEHOLDER_IMAGE_BLUR }/>
				</div>
			</button>

			<div className={ styles.Description__text }>
				<h2>Bring the future today</h2>
				<p>
					{ `Future world: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.` }
				</p>
			</div>
		</section>
  )
}
