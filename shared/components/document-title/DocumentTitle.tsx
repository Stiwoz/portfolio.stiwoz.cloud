import { FC } from 'react';
import Head from 'next/head';

interface DocumentTitleProps {
  title?: string;
}

const DocumentTitle: FC<DocumentTitleProps> = ({ title = null }) => {
  const baseTitle = `Stiwoz`;

  const t = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Head>
      <title>{t}</title>
    </Head>
  );
};

export default DocumentTitle;
