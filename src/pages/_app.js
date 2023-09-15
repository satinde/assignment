import "@/styles/globals.css";
import "../styles/main.css";
import  Header  from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { store } from '../redux/store';
import { Provider } from "react-redux"; 

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/LogIn" || router.pathname === "/Sign";

  return (
    <>
     <Provider store={ store }>
       {!isLoginPage && <Header />}
       <Component {...pageProps} />    
       {!isLoginPage && <Footer />}
     </Provider>
     
    </>
  );
}
