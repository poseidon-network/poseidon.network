import React from 'react';
import Head from 'next/head';

import Nav from '../components/Nav';
import Router from 'next/router';
import Footer from '../components/Footer';
import { logout, getUser } from '../utils/auth';
import { styles } from '../constants';
import { initGA, logPageView } from '../utils/analytics';

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

    initGA();
    logPageView();
    if (Router.router) {
      Router.router.events.on('routeChangeComplete', logPageView);
    }
  }

  componentWillMount() {
    if (Router.router) {
      Router.router.events.off('routeChangeComplete', logPageView);
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
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
