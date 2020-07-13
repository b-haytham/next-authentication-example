import Head from 'next/head'

import NavBar from "./NavBar";

function Layout({ children, title = "Next Auth" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<header>
				<NavBar />
			</header>

			{children}
		</div>
	);
}

export default Layout
