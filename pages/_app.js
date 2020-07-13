import React, { useEffect } from "react";
import Head from "next/head";
import App from "next/app";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Layout from "../components/Layout";

import theme from "../theme";

function MyApp(props) {
	const { Component, pageProps } = props;

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Next Auth</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MuiThemeProvider>
		</>
	);
}

export default MyApp;
