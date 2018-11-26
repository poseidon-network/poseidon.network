import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => ((
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
    </Head>
    { children }

    <style global jsx>{`
      body {
        font-family: 'Lato';
      }

      a {
        color: #90cfbe;
        font-size: 13px;
        text-decoration: none;
      }

      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      #__next {
        width: 100%;
        position: relative;
        overflow: hidden;  
      }
    `}</style>
  </div>
));

export default Layout;
