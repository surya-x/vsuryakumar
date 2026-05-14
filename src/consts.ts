// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'V Surya Kumar';
export const SITE_DESCRIPTION = 'Personal tech blog on AI, Software Engineering, and Systems — by V Surya Kumar';
export const SITE_AUTHOR = 'V Surya Kumar';

export const SOCIAL_LINKS = {
	x: 'https://x.com/v_surya_kumar',
	github: 'https://github.com/surya-x',
};

// Tag color mapping
export const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
	ai: { bg: 'rgba(6, 182, 212, 0.15)', text: '#22d3ee', border: 'rgba(6, 182, 212, 0.3)' },
	llm: { bg: 'rgba(59, 130, 246, 0.15)', text: '#60a5fa', border: 'rgba(59, 130, 246, 0.3)' },
	systems: { bg: 'rgba(139, 92, 246, 0.15)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.3)' },
	'software-engineering': { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80', border: 'rgba(34, 197, 94, 0.3)' },
	agents: { bg: 'rgba(249, 115, 22, 0.15)', text: '#fb923c', border: 'rgba(249, 115, 22, 0.3)' },
	'deep-learning': { bg: 'rgba(236, 72, 153, 0.15)', text: '#f472b6', border: 'rgba(236, 72, 153, 0.3)' },
	tutorial: { bg: 'rgba(234, 179, 8, 0.15)', text: '#facc15', border: 'rgba(234, 179, 8, 0.3)' },
	infrastructure: { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)' },
};

export const DEFAULT_TAG_COLOR = { bg: 'rgba(161, 161, 170, 0.15)', text: '#a1a1aa', border: 'rgba(161, 161, 170, 0.3)' };
