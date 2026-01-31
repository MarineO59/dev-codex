import type { Snippet } from "@/types";

export const initialSnippets: Snippet[] = [
	{
		id: "1",
		title: "Vider le cache Git",
		language: "Git",
		command: "git rm -r --cached .",
		explanation:
			"Supprime les fichiers de l'index sans les effacer du disque. Pratique quand un fichier est dans le .gitignore mais continue d'être suivi.",
		tip: "N'oublie pas de faire un commit juste après !",
	},
	{
		id: "2",
		title: "Centrer une Div (Flexbox)",
		language: "CSS",
		command: "display: flex;\njustify-content: center;\nalign-items: center;",
		explanation:
			"La méthode moderne et la plus simple pour centrer un élément horizontalement et verticalement.",
		tip: "Le parent doit avoir une hauteur définie (ex: h-screen ou height: 100vh).",
	},
];
