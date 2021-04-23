import { Tabs, Tab, makeStyles, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Projects from "./Projects";
import Blurbs from "./Blurbs";
import ProjectTab from "./ProjectTab.js";
import { useState } from "react";
import "./App.css";
import Blurb from "./Blurb";

const useStyles = makeStyles({
	header: {
		color: "#FBFCD4",
	},
	tabs: {
		backgroundColor: "#0A0A0A",
	},
	tab: {
		color: "#FFDD03",
	},
});

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function App() {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const tabs = ["RESEARCH", "ENGINEERING", "LEISURE"];
	const [projects, setProjects] = useState(Projects["content"][value]);
	const [blurb, setBlurb] = useState(Blurbs["content"][value]);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		setProjects(Projects["content"][newValue]);
		setBlurb(Blurbs["content"][newValue]);
	};
	return (
		<div className="App">
			<h1 className={classes.header}>Hi. I'm Michael Nath</h1>
			{/* Links to Stuff */}
			<h2 className={classes.header}>
				<IconButton href="https://github.com/Michael-Nath">
					<GitHubIcon style={{ color: "#FBFCD4" }} />
				</IconButton>{" "}
				<IconButton href="https://www.linkedin.com/in/michael-nath/">
					<LinkedInIcon style={{ color: "#FBFCD4" }} />
				</IconButton>
			</h2>
			<Tabs
				onChange={handleChange}
				value={value}
				className={classes.tabs}
				textColor="primary"
				centered={true}
			>
				{tabs.map((item, i) => {
					return (
						<Tab
							key={i}
							className={classes.tab}
							label={item}
							{...a11yProps(i)}
						/>
					);
				})}
			</Tabs>
			<Blurb header={blurb.header} description={blurb.description} />
			{projects.map((item, i) => {
				return (
					<ProjectTab
						name={item.name}
						description={item.description}
						tools={item.tools}
						docs={item.docs != undefined ? item.docs : []}
						key={i}
					></ProjectTab>
				);
			})}
		</div>
	);
}

export default App;
