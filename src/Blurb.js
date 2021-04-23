import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
const useStyles = makeStyles({
	root: {
		backgroundColor: "#151515",
		padding: "2vw",
		marginBottom: "5vh",
	},
	header: {
		color: "#FBFCD4",
	},
	description: {
		color: "white",
	},
	button: {
		backgroundColor: "#3f51b5",
		color: "#FFDD03",
		"&:hover": {
			backgroundColor: "#021c4f",
		},
	},
});
function Blurb({ header, description }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2 className={classes.header}>{header}</h2>
			<h3 className={classes.description}>{description}</h3>
			<Button
				variant="contained"
				startIcon={<DescriptionIcon style={{ color: "white" }} />}
				className={classes.button}
				href="Research_Resume_Michael_Nath.pdf"
			>
				Résumé
			</Button>
		</div>
	);
}

export default Blurb;
