import Head from "next/head";

interface LayoutProps {
  title?: string;
  seoTitle?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}
export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{hasTabBar ? <></> : <></>}</div>
      {children}
    </div>
  );
}
