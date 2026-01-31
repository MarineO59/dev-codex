import type { Snippet } from "@/types";

export interface SettingsSection {
	title: string;
	description: string;
}

export interface ExportData {
	snippets: Snippet[];
	exportDate: string;
	version: string;
}
