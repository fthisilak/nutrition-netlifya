// src/lib/getMdxContent.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getContentList(folder) {
  const directory = path.join(process.cwd(), 'content', folder)
  
  // Klasör yoksa boş array döndür
  if (!fs.existsSync(directory)) {
    console.warn(`Warning: Directory ${directory} does not exist`)
    return []
  }

  try {
    const files = fs.readdirSync(directory)

    const content = files.map((file) => {
      const filePath = path.join(directory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        ...data,
        slug: file.replace('.md', ''),
        content
      }
    })

    return content.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error(`Error reading content from ${folder}:`, error)
    return []
  }
}