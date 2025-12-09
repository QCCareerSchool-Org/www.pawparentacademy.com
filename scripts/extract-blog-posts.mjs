import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const workspaceRoot = 'c:/Users/Maryam/ppa-migration';
const blogPostsPath = path.join(workspaceRoot, 'src/app/(main)/blog/blog-posts.ts');
const postsDir = path.join(workspaceRoot, 'src/app/(main)/blog/posts');

const sourceText = fs.readFileSync(blogPostsPath, 'utf8');
const sourceFile = ts.createSourceFile(
  'blog-posts.ts',
  sourceText,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS,
);

const htmlMap = new Map();

sourceFile.forEachChild((node) => {
  if (!ts.isVariableStatement(node)) return;
  node.declarationList.declarations.forEach((declaration) => {
    const name = declaration.name.getText(sourceFile);
    if (!name.endsWith('Html')) return;
    const initializer = declaration.initializer;
    if (!initializer) return;
    const initializerText = sourceText.slice(initializer.pos, initializer.end).trim();
    htmlMap.set(name, initializerText);
  });
});

let blogPostsArray = null;

sourceFile.forEachChild((node) => {
  if (!ts.isVariableStatement(node)) return;
  const declaration = node.declarationList.declarations[0];
  if (!declaration) return;
  if (declaration.name.getText(sourceFile) !== 'blogPosts') return;
  if (!declaration.initializer || !ts.isArrayLiteralExpression(declaration.initializer)) return;
  blogPostsArray = declaration.initializer;
});

if (!blogPostsArray) {
  throw new Error('Could not find blogPosts array literal.');
}

blogPostsArray.elements.forEach((element) => {
  if (!ts.isObjectLiteralExpression(element)) return;

  let slug = '';
  let contentHtmlId = '';

  element.properties.forEach((prop) => {
    if (!ts.isPropertyAssignment(prop)) return;
    const key = prop.name.getText(sourceFile);
    if (key === 'slug' && ts.isStringLiteral(prop.initializer)) {
      slug = prop.initializer.text;
    }
    if (key === 'contentHtml') {
      contentHtmlId = prop.initializer.getText(sourceFile);
    }
  });

  if (!slug || !contentHtmlId) return;

  const htmlInitializer = htmlMap.get(contentHtmlId);
  if (!htmlInitializer) {
    console.warn(`Missing HTML initializer for ${contentHtmlId}`);
    return;
  }

  const fileName = `${slug}.ts`;
  const filePath = path.join(postsDir, fileName);
  if (fs.existsSync(filePath)) {
    console.log(`Skipping existing file: ${fileName}`);
    return;
  }

  const objectLiteralText = element.getText(sourceFile).trim();
  const postConstName = `${contentHtmlId.replace(/Html$/, '')}Post`;

  const fileContents = `import type { BlogPost } from '../types';

const ${contentHtmlId} = ${htmlInitializer};

export const ${postConstName}: BlogPost = ${objectLiteralText};
`;

  fs.writeFileSync(filePath, fileContents, 'utf8');
  console.log(`Wrote ${fileName}`);
});
