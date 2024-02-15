import Link from "next/link"
import styles from './Header.module.css'
import { cookies } from "next/headers"

export const Header = () => {
	console.log('Hello from Header (Server component)')

	const cookiesStore = cookies()
	const token = cookiesStore.get('accessToken')?.value

	return(
		<header>
			<nav>
				<ul className={ styles.Header__list }>
					<Link href="/">
						<li>Home</li>
					</Link>
					<Link href="/store">
						<li>Store</li>
					</Link>
					<Link href="/test">
						<li>Test</li>
					</Link>
				</ul>
				{ token ? (<>Hello! 🙂</>) : <Link href='/login'>Login</Link> }
			</nav>
		</header>
	)
}