import { Helmet } from "react-helmet-async";

interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
  articleMeta?: ArticleMeta;
}

const SITE_URL = "https://www.heritagejaipurtravels.com";
const DEFAULT_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/62051185-ddd1-4444-a688-e5da1156163f/id-preview-fc40c01f--c2bfad89-3e60-465e-a251-e93349346e93.lovable.app-1773137363345.png";

const SEO = ({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
  articleMeta,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H0WKDZPSQ3"></script>
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-H0WKDZPSQ3');
    `}
      </script>

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Heritage Jaipur Travels" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {type === "article" && articleMeta?.publishedTime && (
        <meta property="article:published_time" content={articleMeta.publishedTime} />
      )}
      {type === "article" && articleMeta?.modifiedTime && (
        <meta property="article:modified_time" content={articleMeta.modifiedTime} />
      )}
      {type === "article" && articleMeta?.author && (
        <meta property="article:author" content={articleMeta.author} />
      )}
      {type === "article" && articleMeta?.section && (
        <meta property="article:section" content={articleMeta.section} />
      )}
      {type === "article" &&
        articleMeta?.tags?.map((t) => <meta key={t} property="article:tag" content={t} />)}

      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
