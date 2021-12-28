import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { remarkMdxImages } from "remark-mdx-images";

const documentsDirectory = path.join(process.cwd(), "documents");

type Document = {
  categoryId: string;
  documentId: string;
  category: string;
  document: string;
  code: string;
};

export const getDocuments = async (): Promise<Array<Document>> => {
  const documentsIds = getDocumentsIds();
  const documentsData = await Promise.all(
    documentsIds.map(async ({ categoryId, documentId }) => {
      const document = await getDocument(categoryId, documentId);
      return document;
    })
  );
  return documentsData;
};

const getDocument = async (
  category: string,
  document: string
): Promise<Document> => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { frontmatter, code } = await bundleMDX({
    file: path.join(documentsDirectory, category, document, `README.mdx`),
    cwd: documentsDirectory,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.target = ["es6"];
      options.platform = "node";
      options.outdir = path.join(process.cwd(), "public", category, document);
      options.publicPath = path.join("/", category, document);
      options.write = true;
      options.loader = {
        ...options.loader,
        ".png": "file",
      };
      return options;
    },
  });
  return {
    categoryId: category,
    documentId: document,
    category: frontmatter.category,
    document: frontmatter.title,
    code: code,
  };
};
export { getDocument };

const getDocumentsIds = () => {
  const categories = fs
    .readdirSync(documentsDirectory, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  return categories.reduce((acc, category) => {
    const documents = fs.readdirSync(path.join(documentsDirectory, category));

    return [
      ...acc,
      ...documents.map((document) => ({
        categoryId: category,
        documentId: document.replace(/\.mdx$/, ""),
      })),
    ];
  }, [] as Array<{ categoryId: string; documentId: string }>);
};
