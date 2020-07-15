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

const Login = () => {
	const classes = useStyles();

	const handleSubmit = (email, password) => {
		console.log(email, password);
		fetch('/api/login',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		.then(res=> res.json())
		.then(data=> console.log(data))
		.catch(err=> console.log(err.message))
	};

	return (
		<>
			<Container className={classes.container} maxWidth="sm">
				<Typography
					color="secondary"
					className={classes.title}
					variant="h4"
				>
					Login
				</Typography>
				<Form onSubmit={handleSubmit} />
			</Container>
		</>
	);
};

export default Login;
