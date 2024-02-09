'use client'

import React from "react";
import { Hero } from "@/components/Home/Hero";
import { Description } from "@/components/Home/Description";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Hero />
			<Description />
			{ children }
		</div>
	)
}
