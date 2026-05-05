interface PageSeoProps {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/hotels". */
  path: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const ORIGIN = 'https://laplanddeals.com';
const DEFAULT_OG = `${ORIGIN}/og-default.jpg`;

export default function PageSeo({ title, description, path, ogImage, jsonLd }: PageSeoProps) {
  const url = `${ORIGIN}${path === '/' ? '' : path}`;
  const og = ogImage ?? DEFAULT_OG;
  const fullTitle = path === '/' ? title : `${title} | LaplandDeals`;

  const graph = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : null;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={og} />
      <meta property="og:site_name" content="LaplandDeals" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@laplandvibes" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og} />
      {graph && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
          }}
        />
      )}
    </>
  );
}

export function pillarBreadcrumb(pillarName: string, path: string) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: pillarName, item: `${ORIGIN}${path}` },
    ],
  };
}
