import {
	Bar,
	BarChart,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import "./Stats.css";
import type { ChartData } from "./types";

const chartData: ChartData[] = [
	{ name: "JS", niveau: 85, color: "#facc15" },
	{ name: "React", niveau: 70, color: "#22d3ee" },
	{ name: "Git", niveau: 60, color: "#f87171" },
	{ name: "CSS", niveau: 95, color: "#38bdf8" },
];

export default function Stats() {
	return (
		<div className="stats">
			<div className="stats__container">
				<h1 className="stats__title">Statistiques de Code</h1>
				<p className="stats__subtitle">
					Visualisation de ta progression technique
				</p>

				{/* GRAPHIQUE */}
				<div className="stats__chart-card">
					<div className="stats__chart-container">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart data={chartData}>
								<XAxis
									dataKey="name"
									stroke="#475569"
									axisLine={false}
									tickLine={false}
									dy={10}
								/>
								<YAxis hide domain={[0, 100]} />
								<Tooltip
									cursor={{ fill: "#1e293b", opacity: 0.4 }}
									contentStyle={{
										backgroundColor: "#0f172a",
										border: "1px solid #334155",
										borderRadius: "8px",
										color: "#fff",
									}}
									itemStyle={{ color: "#fff" }}
								/>
								<Bar dataKey="niveau" radius={[10, 10, 0, 0]} barSize={45}>
									{chartData.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Bar>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* CARTES RÉCAPITULATIVES */}
				<div className="stats__summary-grid">
					<div className="stats__summary-card">
						<div>
							<p className="stats__card-label">Total Snippets</p>
							<p className="stats__card-value">12</p>
						</div>
						<div className="stats__card-icon stats__card-icon--blue">#</div>
					</div>

					<div className="stats__summary-card">
						<div>
							<p className="stats__card-label">Langage Favori</p>
							<p className="stats__card-value stats__card-value--emerald">
								CSS
							</p>
						</div>
						<div className="stats__card-icon stats__card-icon--emerald">%</div>
					</div>
				</div>
			</div>
		</div>
	);
}
