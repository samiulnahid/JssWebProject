import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import deepEqual from 'deep-equal';
import React from 'react';
import PageHead from './components/Layout/PageHead';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/app.css';
import './assets/css/form.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

/*
  APP LAYOUT
*/
const Layout = ({ route }) => {
  console.log('🚀 ~ Layout ~ route:', route);
  return (
    <React.Fragment>
      {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
      <PageHead route={route} />

      {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
      <VisitorIdentification />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="page__wrapper">
        <Placeholder name="jss-header" rendering={route} />
        <Placeholder name="jss-main" rendering={route} />
        <Placeholder name="jss-footer" rendering={route} />
      </div>
    </React.Fragment>
  );
};

// We don't want to re-render `Layout` when route is changed but layout data is not loaded
// Layout will be re-rendered only when layout data is changed
const propsAreEqual = (prevProps, nextProps) => {
  if (deepEqual(prevProps.route, nextProps.route)) return true;

  return false;
};

export default React.memo(Layout, propsAreEqual);
