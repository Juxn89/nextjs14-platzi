import { Description } from "@/components/Home/Description";
import { Hero } from "@/components/Home/Hero";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Hero />
			<Description />
			{ children }
		</div>
	)
}
