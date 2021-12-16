import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar, Footer } from ".";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>House Hunter</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <Navbar />
            </header>
            <main>
                { children }
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
)

export default Layout;