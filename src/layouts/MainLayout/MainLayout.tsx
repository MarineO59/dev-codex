import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./MainLayout.css";

export default function MainLayout() {
	return (
		<div className="main-layout">
			<Sidebar />
			<div className="main-layout__content">
				<Header />
				<main className="main-layout__main">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
