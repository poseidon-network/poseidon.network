import React from 'react';
import Head from 'next/head';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { logout, getUser } from '../utils/auth';
import { styles } from '../constants';

interface IProps {
  title: string;
  children: React.ReactNode;
  navColor?: string;
}

export const UserContext = React.createContext<IUser>({});

class Layout extends React.Component<IProps, { user: IUser }> {
  state = {
    user: {},
  };

  componentDidMount() {
    this.setState({
      user: getUser(),
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/animate.min.css"
          />
        </Head>
        <UserContext.Provider value={this.state.user}>
          <Nav
            user={this.state.user}
            logout={logout}
            bgColor={this.props.navColor}
          />
          {this.props.children}
          <Footer />
        </UserContext.Provider>
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
          }

          a:hover {
            color: ${styles.primaryColor};
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
