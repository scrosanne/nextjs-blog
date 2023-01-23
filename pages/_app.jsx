//App component to initialize pages

//Component prop = active page
//pageProps = object with the initial props that were preloaded for page by data fetching methods

//global style will apply to all pages and components, only imported here
import "@/styles/global.css";

//font
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function App({ Component, pageProps }) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />;
        </div>
    );
}
