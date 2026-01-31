import {
	AlertCircle,
	CheckCircle2,
	Download,
	RotateCcw,
	Upload,
} from "lucide-react";
import { useRef, useState } from "react";
import type { Snippet } from "@/types";
import "./Settings.css";
import type { ExportData } from "./types";

export default function Settings() {
	const [message, setMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	// Fonction pour exporter les snippets
	const handleExport = (): void => {
		try {
			const snippetsData = localStorage.getItem("my-snippets");
			if (!snippetsData) {
				setMessage({ type: "error", text: "Aucun snippet à exporter" });
				return;
			}

			const snippets: Snippet[] = JSON.parse(snippetsData);

			const exportData: ExportData = {
				snippets,
				exportDate: new Date().toISOString(),
				version: "1.0",
			};

			const dataStr = JSON.stringify(exportData, null, 2);
			const blob = new Blob([dataStr], { type: "application/json" });
			const url = URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = url;
			link.download = `devcodex_snippets_${new Date().toISOString().split("T")[0]}.json`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);

			setMessage({
				type: "success",
				text: `${snippets.length} snippets exportés avec succès !`,
			});
			setTimeout(() => setMessage(null), 3000);
		} catch (_error) {
			setMessage({ type: "error", text: "Erreur lors de l'export" });
			setTimeout(() => setMessage(null), 3000);
		}
	};

	// Fonction pour importer les snippets
	const handleImport = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const content = e.target?.result as string;
				const importedData: ExportData = JSON.parse(content);

				if (!importedData.snippets || !Array.isArray(importedData.snippets)) {
					throw new Error("Format de fichier invalide");
				}

				localStorage.setItem(
					"my-snippets",
					JSON.stringify(importedData.snippets),
				);
				setMessage({
					type: "success",
					text: `${importedData.snippets.length} snippets importés avec succès !`,
				});
				setTimeout(() => {
					setMessage(null);
					window.location.reload();
				}, 2000);
			} catch (_error) {
				setMessage({ type: "error", text: "Fichier invalide ou corrompu" });
				setTimeout(() => setMessage(null), 3000);
			}
		};
		reader.readAsText(file);
	};

	// Fonction pour réinitialiser
	const handleReset = (): void => {
		if (
			window.confirm(
				"⚠️ Voulez-vous vraiment supprimer TOUS vos snippets ? Cette action est irréversible !",
			)
		) {
			localStorage.removeItem("my-snippets");
			setMessage({
				type: "success",
				text: "Tous les snippets ont été supprimés",
			});
			setTimeout(() => {
				setMessage(null);
				window.location.reload();
			}, 2000);
		}
	};

	return (
		<div className="settings">
			<div className="settings__container">
				<h1 className="settings__title">Paramètres</h1>
				<p className="settings__subtitle">Gérer vos données et préférences</p>

				{/* MESSAGE */}
				{message && (
					<div
						className={
							message.type === "success"
								? "settings__success-message"
								: "settings__error-message"
						}
					>
						{message.type === "success" ? (
							<CheckCircle2 size={20} />
						) : (
							<AlertCircle size={20} />
						)}
						<span>{message.text}</span>
					</div>
				)}

				{/* SECTION EXPORT/IMPORT */}
				<div className="settings__section">
					<h2 className="settings__section-title">Sauvegarde & Restauration</h2>
					<p className="settings__section-description">
						Exportez vos snippets pour les sauvegarder ou les partager. Importez
						un fichier pour restaurer vos données.
					</p>
					<div className="settings__actions">
						<button
							type="button"
							onClick={handleExport}
							className="settings__button settings__button--primary"
						>
							<Download size={18} />
							Exporter mes snippets
						</button>
						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							className="settings__button settings__button--secondary"
						>
							<Upload size={18} />
							Importer des snippets
						</button>
						<input
							ref={fileInputRef}
							type="file"
							accept=".json"
							onChange={handleImport}
							className="settings__file-input"
						/>
					</div>
				</div>

				<div className="settings__divider" />

				{/* SECTION DANGER ZONE */}
				<div className="settings__section">
					<h2 className="settings__section-title">Zone de danger</h2>
					<p className="settings__section-description">
						Supprimer toutes vos données de manière permanente. Cette action est
						irréversible.
					</p>
					<button
						type="button"
						onClick={handleReset}
						className="settings__button settings__button--danger"
					>
						<RotateCcw size={18} />
						Réinitialiser toutes les données
					</button>
				</div>
			</div>
		</div>
	);
}
