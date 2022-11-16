import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import PageTransitions from "../components/PageTransitions";
import ThreeComponent from "../components/ThreeComponent";
// import ThreeComponent from "../components/ThreeComponent";
import GlobalStyle from "../styles/global-style";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [routingPageOffset, setRoutingPageOffset] = useState(0);

  useEffect(
    () => {
      const pageChange = () => {
        setRoutingPageOffset(window.scrollY);
      };
      router.events.on("routeChangeStart", pageChange);
    },
    typeof router.events == "Array" ? router.events : []
  );

  return (
    <>
      <Header />
      {/* <ThreeComponent className={"canvas"} /> */}
      {/* <MyAwesomeDeclarativeScene /> */}
      <PageTransitions
        route={router.asPath}
        routingPageOffset={routingPageOffset}
      >
        <Component {...pageProps} />
      </PageTransitions>
      <GlobalStyle />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default MyApp;
