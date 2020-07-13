

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

    const handleSubmit = (email, password) =>{
        console.log(email, password)
    }

    return (
		<>
			<Container className={classes.container} maxWidth="sm">
				<Typography className={classes.title} variant="h4">
					Login
				</Typography>
                <Form 
                    onSubmit={handleSubmit}
                    signUp
                />
			</Container>
		</>
	);
};

export default SignUp;
