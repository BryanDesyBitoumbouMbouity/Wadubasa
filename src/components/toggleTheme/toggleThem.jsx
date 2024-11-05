import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { IconButton } from "@mui/material";

const ToggleTheme = () => {
	const { theme, toggle } = useContext(AppContext);

	return (
		<div>
			<IconButton onClick={toggle} style={{ color: "white" }}>
				{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
			</IconButton>
		</div>
	);
};

export default ToggleTheme;
