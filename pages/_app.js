import Head from 'next/head';
import '../styles/globals.scss';

import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/github.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/pure-min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.2/codemirror.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.2/theme/monokai.min.css"
        />
        {/* <link href="themes/prism.css" rel="stylesheet" /> */}
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.2/codemirror.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.2/mode/markdown/markdown.min.js"></script>
      <script src="prism.js"></script>
    </>
  );
}

export default MyApp;
