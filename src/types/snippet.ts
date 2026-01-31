// Types globaux réutilisables pour les snippets
export interface Snippet {
	id: string;
	title: string;
	language: string;
	command: string;
	explanation: string;
	tip?: string;
}
