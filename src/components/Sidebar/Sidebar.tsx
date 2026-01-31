import { BarChart3, Code2, Cpu, Home, Settings, Terminal } from "lucide-react";
//                                        ^^^^^^^^ Ajoute Settings ici
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import type { Category } from "./types";

const categories: Category[] = [
	{
		name: "Git",
		icon: Terminal,
		color: "sidebar__icon--blue",
		path: "/library/Git",
	},
	{
		name: "React",
		icon: Code2,
		color: "sidebar__icon--cyan",
		path: "/library/React",
	},
	{
		name: "JavaScript",
		icon: Cpu,
		color: "sidebar__icon--yellow",
		path: "/library/JavaScript",
	},
	{
		name: "CSS",
		icon: Code2,
		color: "sidebar__icon--pink",
		path: "/library/CSS",
	},
];

export default function Sidebar() {
	const location = useLocation();

	const isActive = (path: string): boolean => location.pathname === path;

	return (
		<div className="sidebar">
			{/* LOGO */}
			<div className="sidebar__logo-container">
				<div className="sidebar__logo-icon">D</div>
				<span className="sidebar__logo-text">DevCodex</span>
			</div>

			<nav className="sidebar__nav">
				{/* SECTION NAVIGATION GÉNÉRALE */}
				<div>
					<h3 className="sidebar__section-title">Navigation</h3>
					<Link
						to="/"
						className={`sidebar__link ${isActive("/") ? "sidebar__link--active" : ""}`}
					>
						<Home size={18} />
						<span>Accueil</span>
					</Link>
				</div>

				{/* SECTION BIBLIOTHÈQUE */}
				<div>
					<h3 className="sidebar__section-title">Bibliothèque</h3>
					<ul className="sidebar__list">
						{categories.map((cat) => (
							<li key={cat.name}>
								<Link
									to={cat.path}
									className={`sidebar__link ${isActive(cat.path) ? "sidebar__link--active" : ""}`}
								>
									<cat.icon size={18} className={cat.color} />
									<span>{cat.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* SECTION ANALYSE */}
				<div>
					<h3 className="sidebar__section-title">Analyse</h3>
					<Link
						to="/stats"
						className={`sidebar__link ${isActive("/stats") ? "sidebar__link--active" : ""}`}
					>
						<BarChart3 size={18} className="sidebar__icon--emerald" />
						<span>Mes Stats</span>
					</Link>
					{/* ⬇️ NOUVEAU LIEN ICI ⬇️ */}
					<Link
						to="/settings"
						className={`sidebar__link ${isActive("/settings") ? "sidebar__link--active" : ""}`}
					>
						<Settings size={18} className="sidebar__icon--emerald" />
						<span>Paramètres</span>
					</Link>
				</div>
			</nav>

			{/* FOOTER */}
			<div className="sidebar__footer">
				<div className="sidebar__session-card">
					<p className="sidebar__session-label">Session</p>
					<p className="sidebar__session-user">admin@devcodex</p>
				</div>
			</div>
		</div>
	);
}
