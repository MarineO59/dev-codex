import type { Snippet } from "@/types";

export interface HomeState {
	snippets: Snippet[];
	searchTerm: string;
	isModalOpen: boolean;
	newTitle: string;
	newLanguage: string;
	newCommand: string;
}
