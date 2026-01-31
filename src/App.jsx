import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "./pages/Home";
import Settings from "./pages/Settings"; // ← Ajoute cette ligne
import Stats from "./pages/Stats";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="library/:language" element={<Home />} />
					<Route path="stats" element={<Stats />} />
					<Route path="settings" element={<Settings />} /> {/* ← Ajoute cette ligne */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}