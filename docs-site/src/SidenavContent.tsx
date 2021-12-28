import React from "react";
import styled from "styled-components";
import Link from "next/link";

type SidenavProps = {
  documents: Array<Document>;
};

type Document = {
  categoryId: string;
  documentId: string;
  category: string;
  document: string;
  code: string;
};

type Categories = {
  [key: string | number]: Array<Document>;
};

function SidenavContent({ documents = [] }: SidenavProps) {
  const groupedDocuments = documents.reduce(
    (acc, document) => ({
      ...acc,
      [document.category]: [...(acc[document.category] || []), document],
    }),
    {} as Categories
  );

  return (
    <div>
      <Title>Halstack Guidelines</Title>
      {Object.keys(groupedDocuments).map((category) => (
        <div key={`category`}>
          <CategoryTitle>{category}</CategoryTitle>
          <ComponentsList>
            {groupedDocuments[category].map((document) => (
              <div key={`${document.categoryId}${document.documentId}`}>
                <Link
                  passHref
                  href={`/${document.categoryId}/${document.documentId}`}
                >
                  <DocumentLink>{document.document}</DocumentLink>
                </Link>
              </div>
            ))}
          </ComponentsList>
        </div>
      ))}
    </div>
  );
}

const CategoryTitle = styled.div`
  text-transform: uppercase;
  color: gray;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const ComponentsList = styled.div`
  margin-left: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const DocumentLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  font-weight: normal;
  color: gray;
  margin: 2px 0px;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #646464;
  font-weight: normal;
  line-height: 22px;
`;

export default SidenavContent;
