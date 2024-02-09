'use client'

import Image from 'next/image'
import styles from '@/sass/global-error.module.sass'

export default function GlobalError({ reset }: ErrorPageProps) {
	return(
		<>
			<main className={ styles.Error }>
				<h1 className={ styles.Error__title }>Something was wrong!</h1>
				<Image src='/images/error.png' alt='error' width={500} height={500} />
				<p className={ styles.Error__message }>{ `We're working on fix this one` }</p>
				<button className={ styles.Error__button } onClick={ reset }>Try again!</button>
			</main>
		</>
	)
}
