import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	form: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: "100%",
		margin: "10px 0",
	},
	button: {
		width: "100px",
		margin: "10px 0",
	},
}));

const Form = (props) => {
	const classes = useStyles();
	const [userName, setUserName] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if(props.signUp){
			props.onSubmit(userName, emailValue, password, confirmPassword);
		}else{
			props.onSubmit(emailValue, password)
		}
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			{props.signUp && (
				<TextField
					className={classes.input}
					id="username"
					label="UserName"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
                    required
                    autoComplete='off'
				/>
			)}
			<TextField
				className={classes.input}
				id="email"
				label="Email"
				type="email"
				value={emailValue}
				onChange={(e) => setEmailValue(e.target.value)}
				required
				autoComplete="off"
			/>
			<TextField
				className={classes.input}
				id="password"
				label="Password"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required
			/>
			{props.signUp && (
				<TextField
					className={classes.input}
					id="confirm-password"
					label="Confirm password"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
			)}
			<Button variant="contained" color="secondary" type="submit">
				Submit
			</Button>
		</form>
	);
};

export default Form;
