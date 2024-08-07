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
        <meta property="og:image" content="./meta.png" />
        <meta
          property="og:url"
          content="https://yuri-seongsu-wedding.vercel.app/"
        />
        <link rel="icon" href="/favicon.ico" />
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
