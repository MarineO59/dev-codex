import type { Snippet } from "@/types";

// Types spécifiques au composant SnippetCard
export interface SnippetCardProps {
	snippet: Snippet;
	onDelete: () => void;
}
