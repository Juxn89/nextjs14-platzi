import Link from "next/link"
import styles from './Header.module.css'
import { cookies } from "next/headers"
import { validateAccessToken } from "@/utils/auth/validateAccessToken"

export const Header = async () => {
	console.log('Hello from Header (Server component)')

	const customer = await validateAccessToken();

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
				{ customer ? (<>Hello { customer.firstName }! 🙂</>) : <Link href='/login'>Login</Link> }
			</nav>
		</header>
	)
}