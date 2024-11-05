"use client";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

export const ThemeProvider = ({ children }) => {
	const { theme } = useContext(AppContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
		return <div className={theme}>{children}</div>;
	}
};
