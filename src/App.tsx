import { Header } from "./ui/Header";
import { PageLayout } from "./ui/PageLayout";
import { Sidebar } from "./ui/Sidebar";
import { Timeline } from "./ui/Timeline";

export function App() {
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<Timeline />
			</PageLayout>
		</>
	);
}
