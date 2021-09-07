import '@app/styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
