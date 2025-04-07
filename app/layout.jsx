import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Casey | Portofolio",

    description:
		"My name is Casey, I'm a senior full stack developer with over 10 years of experience",

    author: "Casey Clark",
    applicationName: "Casey",

    openGraph: {
		type: "website",
		title: "Casey | Portofolio",
		site_name: "Casey | Portofolio",
		description: "My name is Casey, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Casey Portofolio",
			},
		],
		site_name: "Casey | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
