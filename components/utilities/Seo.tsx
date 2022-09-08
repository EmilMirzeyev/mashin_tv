import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { IMeta } from "../../types/i_meta";
import { ISeo } from "../../types/i_seo";

const defaultMeta: IMeta = {
  title: "Mashin.tv",
  site_name: "Mashin.tv",
  description: "Welcome to Mashin.tv",
  url: "https://mashin.tv",
  image: "/favicon.ico",
  type: "website",
  robots: "follow, index"
};

const Seo: FC<ISeo> = ({ templateTitle, structuredData, ...m }) => {
  const router = useRouter();
  const meta: IMeta = { ...defaultMeta, ...m };

  meta["title"] = templateTitle ? `${templateTitle} | ${meta.site_name}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codemode" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date.toString()} />
          <meta name="publish_date" property="og:publish_date" content={meta.date.toString()} />
          <meta name="author" property="article:author" content="Emil Mirzeyev" />
        </>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default Seo;