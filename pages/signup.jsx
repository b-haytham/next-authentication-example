import { useState } from "react";
import Router from "next/router";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Form from "../components/Form";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "calc(100vh - 70px)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		padding: "20px",
		textAlign: "center",
	},
}));

const SignUp = () => {
	const classes = useStyles();
	const [error, setError] = useState("");

	const handleSubmit = (username, email, password) => {
		fetch("/api/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		})
			.then(async (res) => {
				if (res.ok) {
					Router.push("/login");
				} else {
					const json = await res.json();
					return json;
				}
			})
			.then((data) => {
                setError(data)
            })
            .catch(err=>{
                setError(err.message)
            })
	};

	return (
		<>
			<Container className={classes.container} maxWidth="sm">
				<Typography
					color="secondary"
					className={classes.title}
					variant="h4"
				>
					Sign up
				</Typography>
				<Form onSubmit={handleSubmit} signUp />
			</Container>
		</>
	);
};

export default SignUp;
