import { Tabs, Tab, makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles({
	header: {
		color: "#FBFCD4",
	},
	tabs: {
		backgroundColor: "#151515",
	},
	tab: {
		color: "#FFDD03",
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className="App">
			<h1 className={classes.header}>Hi. I'm Michael Nath</h1>
			{/* Links to Stuff */}
			<h2 className={classes.header}>Github Linkedin</h2>
			<Tabs className={classes.tabs} textColor="primary" centered={true}>
				<Tab className={classes.tab} label="RESEARCH" />
				<Tab className={classes.tab} label="ENGINEERNIG" />
				<Tab className={classes.tab} label="LEISURE" />
			</Tabs>
		</div>
	);
}

export default App;
