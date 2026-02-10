import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content/legal');

export interface LegalContent {
    id: string;
    title: string;
    lastUpdated: string;
    contentHtml: string;
    seo?: {
        title?: string;
        description?: string;
    };
}

export async function getLegalEntries() {
    const fileNames = fs.readdirSync(contentDirectory);
    const allEntriesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        } as any;
    });

    return allEntriesData.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export async function getLegalEntryData(id: string): Promise<LegalContent> {
    const fullPath = path.join(contentDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as any),
    };
}
