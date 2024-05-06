export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "FJ Tech",
	description: "Sistema de gestão de voluntários do Festival do Japão",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Voluntários",
			href: "/voluntarios",
		},
		{
			label: "Recursos",
			href: "/recursos",
		},
		{
			label: "Estandes",
			href: "/estandes",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
};
