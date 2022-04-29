import Navbar from '../src/Navbar';
function MyApp({ Component, pageProps }) {
          return (
            <>
             <Navbar />
             <Component {...pageProps} />
             </>
             )
        }
        

        
export default MyApp