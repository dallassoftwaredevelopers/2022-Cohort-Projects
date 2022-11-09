import "../styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const API = process.env.REACT_APP_API_KEY;

axios.defaults.baseURL = `https://www.themealdb.com/api/json/v2/9973533`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          toastOptions: {
            style: {
              fontSize: "1.4rem",
            },
          },
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default MyApp;
