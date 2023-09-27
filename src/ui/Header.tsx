import IgniteLogo from "@/assets/ignite-logo.svg";

export function Header() {
	return (
		<header className="flex items-center justify-center py-5 bg-clr-gray-600">
			<img src={IgniteLogo} className="h-10" />
		</header>
	);
}
