import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import { styles } from '../../constants';

interface IProps {
  title: string;
  children: React.ReactNode;
  navColor?: string;
}

class Layout extends React.Component<IProps> {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        {this.props.children}
        <Footer />
        <style global jsx>{`
          html,
          body {
            font-family: 'Montserrat', sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            background-color: ${styles.darkLight};
            min-height: 100vh;
            min-width: 100vw;
          }

          a {
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: ${styles.lightColor};
            text-decoration: none;
            transition: color 0.3s;
          }

          a:hover {
            color: ${styles.primaryColor};
          }

          .icon-link .background {
            transition: fill 0.3s;
          }

          .icon-link:hover .background {
            fill: ${styles.primaryColor};
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
    );
  }
}

export default Layout;
