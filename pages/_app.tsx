import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>유리🤍성수 결혼해요!</title>
        <meta
          name="description"
          content="2024년 10월 12일 토요일 12시, 세상의 모든 아침, 여의도"
        />
        {/* open graph */}
        <meta property="og:title" content="유리🤍성수 결혼해요!" />
        <meta
          property="og:description"
          content="2024년 10월 12일 토요일 12시, 세상의 모든 아침, 여의도"
        />
        <meta property="og:image" content="/meta.jpeg" />
        <meta
          property="og:url"
          content="https://yuri-seongsu-wedding.vercel.app/"
        />
        {/* twitter */}
        <meta name="twitter:title" content="유리🤍성수 결혼해요!" />
        <meta
          name="twitter:description"
          content="2024년 10월 12일 토요일 12시, 세상의 모든 아침, 여의도"
        />
        <meta name="twitter:image" content="/meta.jpeg" />
        <meta
          name="twitter:url"
          content="https://yuri-seongsu-wedding.vercel.app/"
        />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* kakaomap */}
        <script
          className="daum_roughmap_loader_script"
          src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
        ></script>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
