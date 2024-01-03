// // This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// // Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
// let Navigation = ({ t, i18n }) => (
//   <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
//     <h5 className="my-0 me-md-auto fw-normal">
//       <NavLink to="/" className="text-dark">
//         <img src={logo} alt="Sitecore" />
//         {/* <p className="__red">aaaaaa</p> */}
//       </NavLink>
//     </h5>
//     <nav className="my-2 my-md-0 me-md-3">
//       <a
//         className="p-2 text-dark"
//         href="https://jss.sitecore.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {t('Documentation')}
//       </a>
//       <NavLink to="/styleguide" className="p-2 text-dark">
//         {t('Styleguide')}
//       </NavLink>
//       <NavLink to="/graphql" className="p-2 text-dark">
//         {t('GraphQL')}
//       </NavLink>
//     </nav>
//   </div>
// );

// // inject dictionary props (`t`) into navigation so we can translate it
// // NOTE: using this is needed instead of using i18next directly to keep
// // the component state updated when i18n state (e.g. current language) changes
// Navigation = withTranslation()(Navigation);

// export default Navigation;
