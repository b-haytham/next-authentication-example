import nextCookies from "next-cookies";
import router from "next/router";
import jsCookie from 'js-cookie'
import { Typography, Container, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "calc(100vh - 70px)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		margin: "20px",
	},
}));

const Profile = ({ data }) => {
    const classes = useStyles();
    
    const handleLogOut = () => {
        jsCookie.remove('token')
        router.push('/')
    }

	return (
		<Container className={classes.container}>
			<Typography
				className={classes.title}
				color="secondary"
				variant="h5"
			>
				{`Welcome ${data.username}`}
			</Typography>
			<Button
				onClick={handleLogOut}
				variant="contained"
				color="secondary"
			>
				Log Out
			</Button>
		</Container>
	);
};

Profile.getInitialProps = async (ctx) => {
	const redirectOnError = () => {
		typeof window !== "undefined"
			? router.push("/login")
			: ctx.res.writeHead(302, { Location: "/login" }).end();
	};

	const { token } = nextCookies(ctx);

	if (!token) {
		if (typeof window === "undefined") {
			ctx.res.writeHead(302, { Location: "/login" });
			return ctx.res.end();
		} else {
			return router.push("/login");
		}
	}

	const apiUrl = "http://localhost:3000/api/profile";
	console.log(apiUrl);

	try {
		const response = await fetch(apiUrl, {
			headers: {
				Authorization: JSON.stringify({ token }),
			},
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return { data };
		} else {
			return await redirectOnError();
		}
	} catch (err) {
		return redirectOnError();
    }
    return {}
};

export default Profile;
