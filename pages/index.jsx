import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => {
	return {
		pagetitle: {
			padding: "20px",
			margin: "20px",
			fontWeight: "bolder",
        },
        homepage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
	};
});

const Index = () => {
	const classes = useStyles();
	return (
		<>
		
			<Container className={classes.homepage} maxWidth="lg">
				<Typography
					color="secondary"
					className={classes.pagetitle}
					variant="h4"
					align="center"
				>
					Next Authentication Expample
				</Typography>
                <Typography color='textSecondary'> 
                    Login Or Sign up to go To Profile    
                </Typography>  
              
			</Container>
		</>
	);
};

export default Index;
