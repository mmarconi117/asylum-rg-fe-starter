import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';
import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });

function App() {
  const { Footer, Header } = Layout;
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* Wrap the entire app with Auth0Provider */}
      <Auth0Provider
        domain="dev-0hi5xg40tti5e21y.us.auth0.com"
        clientId="JVC5gGxTuUahivqtgGPJHE9FfpJjFfcE"
        redirectUri={window.location.origin}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0Provider>
    </Provider>
  </Router>,
  document.getElementById('root')
);
