import { Plus, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { initialSnippets } from "@/data/data";
import type { Snippet } from "@/types";
import SnippetCard from "../../components/SnippetCard/SnippetCard";
import "./Home.css";

export default function Home() {
	const [snippets, setSnippets] = useState<Snippet[]>(() => {
		const saved = localStorage.getItem("my-snippets");
		return saved ? JSON.parse(saved) : initialSnippets;
	});
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	// États pour le formulaire
	const [newTitle, setNewTitle] = useState<string>("");
	const [newLanguage, setNewLanguage] = useState<string>("");
	const [newCommand, setNewCommand] = useState<string>("");

	// Sauvegarde automatique
	useEffect(() => {
		localStorage.setItem("my-snippets", JSON.stringify(snippets));
	}, [snippets]);

	// Fonction pour supprimer un snippet
	const deleteSnippet = (id: string | number): void => {
		if (window.confirm("Voulez-vous vraiment supprimer ce snippet ?")) {
			const updatedSnippets = snippets.filter((s) => s.id !== id);
			setSnippets(updatedSnippets);
		}
	};

	// Fonction pour sauvegarder
	const handleSave = (): void => {
		if (!newTitle || !newLanguage || !newCommand) {
			alert("Merci de remplir tous les champs !");
			return;
		}

		const snippetToAdd: Snippet = {
			id: Date.now().toString(),
			title: newTitle,
			language: newLanguage,
			command: newCommand,
			explanation: "Nouveau snippet ajouté via l'interface.",
		};

		setSnippets([snippetToAdd, ...snippets]);

		// Réinitialiser le formulaire
		setNewTitle("");
		setNewLanguage("");
		setNewCommand("");
		setIsModalOpen(false);
	};

	// Filtrage pour la recherche
	const filteredSnippets = snippets.filter(
		(s) =>
			s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			s.language.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="home">
			{/* HEADER */}
			<div className="home__header">
				<div>
					<h1 className="home__title">Ma Bibliothèque</h1>
					<p className="home__count">{filteredSnippets.length} snippets</p>
				</div>

				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					className="home__add-button"
				>
					<Plus size={20} />
					Ajouter un snippet
				</button>
			</div>

			{/* RECHERCHE */}
			<div className="home__search-container">
				<Search className="home__search-icon" size={20} />
				<input
					id="home-search"
					type="text"
					placeholder="Rechercher un snippet..."
					className="home__search-input"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			{/* LISTE */}
			<div className="home__snippets-list">
				{filteredSnippets.length > 0 ? (
					filteredSnippets.map((s) => (
						<SnippetCard
							key={s.id}
							snippet={s}
							onDelete={() => deleteSnippet(s.id)}
						/>
					))
				) : (
					<div className="home__empty-state">
						<p className="home__empty-text">Aucun résultat trouvé 🔍</p>
					</div>
				)}
			</div>

			{/* MODALE */}
			{isModalOpen && (
				<div className="home__modal-overlay">
					<div className="home__modal">
						<div className="home__modal-header">
							<h2 className="home__modal-title">Nouveau Snippet</h2>
							<button
								type="button"
								onClick={() => setIsModalOpen(false)}
								className="home__modal-close"
							>
								<X size={24} />
							</button>
						</div>

						<div className="home__form">
							<div className="home__form-field">
								<label htmlFor="title-input" className="home__form-label">
									Titre
								</label>
								<input
									id="title-input"
									type="text"
									className="home__form-input"
									placeholder="Ex: Centrer une div"
									value={newTitle}
									onChange={(e) => setNewTitle(e.target.value)}
								/>
							</div>

							<div className="home__form-field">
								<label htmlFor="language-input" className="home__form-label">
									Langage
								</label>
								<input
									id="language-input"
									type="text"
									className="home__form-input"
									placeholder="Ex: CSS, Git..."
									value={newLanguage}
									onChange={(e) => setNewLanguage(e.target.value)}
								/>
							</div>

							<div className="home__form-field">
								<label htmlFor="command-textarea" className="home__form-label">
									Code / Commande
								</label>
								<textarea
									id="command-textarea"
									className="home__form-textarea"
									placeholder="Collez votre code..."
									value={newCommand}
									onChange={(e) => setNewCommand(e.target.value)}
								/>
							</div>

							<button
								type="button"
								onClick={handleSave}
								className="home__save-button"
							>
								Enregistrer dans la bibliothèque
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
