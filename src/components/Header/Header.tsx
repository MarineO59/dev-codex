import { Search } from "lucide-react";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<div className="header__search-container">
				<Search className="header__search-icon" size={18} />
				<input
					id="header-search"
					type="text"
					placeholder="Rechercher une commande, un langage..."
					className="header__search-input"
				/>
			</div>
			<div className="header__version">DEVCODEX v1.0</div>
		</header>
	);
}
