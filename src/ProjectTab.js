import React, { useState } from "react";
import {
	CardContent,
	Card,
	CardActions,
	CardHeader,
	makeStyles,
	Button,
	Collapse,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import BuildIcon from "@material-ui/icons/Build";
import AdjustIcon from "@material-ui/icons/Adjust";
const useStyles = makeStyles({
	card: {
		backgroundColor: "#151515",
		padding: "1.5vw",
		marginBottom: "5vh",
	},
	header: {
		color: "#FBFCD4",
	},
	description: {
		color: "white",
	},
	button: {
		color: "#FFDD03",
		borderColor: "#3f51b5",
		"&:hover": {
			backgroundColor: "#021c4f",
		},
	},
});

function ProjectTab({ name, description, tools, docs }) {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	return (
		<Card className={classes.card} raised={true}>
			<CardHeader className={classes.header} title={name} />
			<CardContent>
				<h3 className={classes.description}>{description}</h3>
				<Collapse in={expanded} unmountOnExit>
					<CardContent>
						<List className={classes.description}>
							<ListItem component="h2">Tools Learned</ListItem>
							{tools.map((tool, i) => {
								return (
									<ListItem component="h4" key={i}>
										<ListItemIcon>
											<AdjustIcon className={classes.description} />
										</ListItemIcon>
										<ListItemText primary={tool} />
									</ListItem>
								);
							})}
						</List>
					</CardContent>
				</Collapse>
				<IconButton
					className={classes.description}
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? <ExpandLessIcon /> : <BuildIcon />}
				</IconButton>
			</CardContent>
			<CardActions>
				{docs.map((doc, i) => {
					return (
						<Button
							size="large"
							variant="outlined"
							href={doc.link}
							className={classes.button}
							key={i}
						>
							{doc.name}
						</Button>
					);
				})}
			</CardActions>
		</Card>
	);
}
export default ProjectTab;
