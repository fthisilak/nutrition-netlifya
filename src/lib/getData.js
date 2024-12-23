// src/lib/getData.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getPrograms(category) {
    const contentDirectory = path.join(process.cwd(), `src/content/${category}`)
    
    console.log('Checking directory:', contentDirectory);
    
    if (!fs.existsSync(contentDirectory)) {
        console.log(`Directory not found: ${contentDirectory}`);
        return []
    }

    try {
        const files = fs.readdirSync(contentDirectory);
        console.log('Files found:', files);
        
        const programs = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const filePath = path.join(contentDirectory, file)
                const fileContent = fs.readFileSync(filePath, 'utf8')
                console.log('File content:', fileContent);
                const { data } = matter(fileContent)
                return {
                    ...data,
                    id: file.replace('.md', '')
                }
            })
            .filter(program => program.active !== false)
            .sort((a, b) => (a.order || 0) - (b.order || 0))

        console.log('Processed programs:', programs);
        return programs
    } catch (error) {
        console.error(`Error reading programs from ${category}:`, error)
        return []
    }
}