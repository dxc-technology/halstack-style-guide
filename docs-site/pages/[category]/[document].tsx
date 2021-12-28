import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import styled from "styled-components";
import * as components from "../../documents/MDXComponents";
import * as replacements from "../../src/MDXReplacements";

import { getDocuments, getDocument } from "../../src/docs-service";

type documentProps = {
  document: Document;
};
type Document = {
  categoryId: string;
  documentId: string;
  category: string;
  document: string;
  code: string;
};

export default function Post({ document }: documentProps) {
  const Component = useMemo(
    () => getMDXComponent(document.code),
    [document.code]
  );

  return (
    <Container>
      <Head>
        <title>{document.document} — Halstack Guidelines</title>
      </Head>
      <Component components={{ ...components, ...replacements }} />
    </Container>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { category: string; document: string };
}) => {
  const document = await getDocument(params.category, params.document);
  const documents = await getDocuments();
  return {
    props: {
      document,
      documents,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await getDocuments();
  return {
    paths: documents.map(({ documentId, categoryId }) => ({
      params: {
        document: documentId,
        category: categoryId,
      },
    })),
    fallback: false,
  };
};

const Container = styled.div`
  max-width: 64rem;
  margin: 48px 96px;
`;
