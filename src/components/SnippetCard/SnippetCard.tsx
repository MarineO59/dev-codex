import { Check, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import "./SnippetCard.css";
import type { SnippetCardProps } from "./types";

export default function SnippetCard({ snippet, onDelete }: SnippetCardProps) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (): void => {
		navigator.clipboard.writeText(snippet.command);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="snippet-card">
			<div className="snippet-card__header">
				<div>
					<span className="snippet-card__badge">{snippet.language}</span>
					<h3 className="snippet-card__title">{snippet.title}</h3>
				</div>

				<div className="snippet-card__actions">
					<button
						type="button"
						onClick={copyToClipboard}
						className="snippet-card__button snippet-card__button--copy"
						title="Copier le code"
					>
						{copied ? (
							<Check size={18} className="snippet-card__icon--copied" />
						) : (
							<Copy size={18} />
						)}
					</button>

					<button
						type="button"
						onClick={onDelete}
						className="snippet-card__button snippet-card__button--delete"
						title="Supprimer le snippet"
					>
						<Trash2 size={18} />
					</button>
				</div>
			</div>

			<div className="snippet-card__code-container">
				<code className="snippet-card__code">{snippet.command}</code>
			</div>

			<p className="snippet-card__explanation">{snippet.explanation}</p>
		</div>
	);
}
