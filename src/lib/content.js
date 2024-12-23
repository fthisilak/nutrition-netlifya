// src/lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getAllContent(folder) {
  const fullPath = path.join(contentDirectory, folder);
  
  // Eğer klasör yoksa boş dizi döndür
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);

  const content = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(fullPath, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: filename.replace(/\.md$/, ''),
        ...data,
        content
      };
    });

  return content;
}

export async function getContentBySlug(folder, slug) {
  try {
    const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content
    };
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }
}