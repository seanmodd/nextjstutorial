import Router, { useRouter } from 'next/router';

import NProgress from 'nprogress';

import { DefaultSeo } from 'next-seo';
import { Box, Button, ChakraProvider, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import SEO from 'next-seo.config';
import theme from 'styles/theme';
import GlobalStyle from 'styles/styles';
import 'styles/css/nprogress.css';

import Star from 'components/Star';
import Footer from 'components/Footer';
import Home from 'components/Home';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  const otherrouter = useRouter();
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />

      <GlobalStyle>
        <Star />
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            key={router.route}
            animate="enter"
            as="main"
            exit="exit"
            flexGrow={1}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: -10 },
              enter: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 10 },
            }}
          >
            <Home />

            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
