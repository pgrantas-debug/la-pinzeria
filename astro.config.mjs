// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'la-pinzeria';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? 'https://pgrantas-debug.github.io' : undefined,
	base: isGitHubPages ? `/${repoName}` : '/',
});
