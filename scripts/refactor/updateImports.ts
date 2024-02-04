import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

// const layerSrc = ['src/shared'];
//
// function isAbsoluteSrc(value: string) {
//   return layerSrc.some((layer) => value.startsWith(layer));
// }

function isAbsoluteImportDetect(value: string) {
  const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclarations) => {
    const value = importDeclarations.getModuleSpecifierValue();

    // if (isAbsoluteSrc(value)) {
    //   const segments = value.split('/');
    //   const newSegments = ['@', ...segments.slice(1)];
    //   const newValue = newSegments.join('/');
    //   importDeclarations.setModuleSpecifier(newValue);
    // }

    if (isAbsoluteImportDetect(value)) {
      importDeclarations.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
