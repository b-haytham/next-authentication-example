import Link  from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	title: {
        flexGrow: 1,
        fontWeight: 'bold'
	},
}));

const NavBar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar color='secondary' position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6">
						Next Auth
					</Typography>
                   
					<Link href='/login' as='/login'>
                        <Button component='a' color="inherit">Login</Button>
                    </Link>
                    <Link href='/signup' as='/signup'>
					    <Button component='a' color="inherit">Sign Up</Button>
                    </Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
