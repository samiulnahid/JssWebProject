/* eslint-disable spaced-comment */
import React from 'react';
import '../assets/css/animate.css';
import '../assets/css/bootsnav.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/responsive.css';
import '../assets/css/style.css';

import profile_image from '../assets/images/about/profile_image.jpg';
import p1 from '../assets/images/portfolio/p1.jpg';
import p2 from '../assets/images/portfolio/p2.jpg';
import p3 from '../assets/images/portfolio/p3.jpg';
import p4 from '../assets/images/portfolio/p4.jpg';
import p5 from '../assets/images/portfolio/p5.jpg';

export default function FullPage() {
  return (
    <>
      <main>
        {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
        {/* top-area Start */}
        <header className="top-area">
          <div className="header-area">
            {/* Start Navigation */}
            <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
              <div className="container">
                {/* Start Header Navigation */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <a className="navbar-brand" href="index.html">
                    browny
                  </a>
                </div>
                {/*/.navbar-header*/}
                {/* End Header Navigation */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                  <ul
                    className="nav navbar-nav navbar-right"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className=" smooth-menu active" />
                    <li className=" smooth-menu">
                      <a href="#education">education</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#skills">skills</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#experience">experience</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#profiles">profile</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#portfolio">portfolio</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#clients">clients</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#contact">contact</a>
                    </li>
                  </ul>
                  {/*/.nav */}
                </div>
                {/* /.navbar-collapse */}
              </div>
              {/*/.container*/}
            </nav>
            {/*/nav*/}
            {/* End Navigation */}
          </div>
          {/*/.header-area*/}
          <div className="clearfix" />
        </header>
        {/* /.top-area*/}
        {/* top-area End */}
        {/*welcome-hero start */}
        <section id="welcome-hero" className="welcome-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-text">
                  <h2>
                    hi <span>,</span> i am <br /> browny <br /> star <span>.</span>{' '}
                  </h2>
                  <p>ui/ux designer and web developer</p>
                  <a href="assets/download/browney.txt" download="">
                    download resume
                  </a>
                </div>
                {/*/.header-text*/}
              </div>
              {/*/.col*/}
            </div>
            {/* /.row*/}
          </div>
          {/* /.container*/}
        </section>
        {/*/.welcome-hero*/}
        {/*welcome-hero end */}
        {/*about start */}
        <section id="about" className="about">
          <div className="section-heading text-center">
            <h2>about me</h2>
          </div>
          <div className="container">
            <div className="about-content">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-about-txt">
                    <h3>
                      I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi
                      elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam quis nostrud.
                    </h3>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde
                      omnis iste natus error sit voluptatem accusantium doloremque lauda ntium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia
                      voluptas sit aspernatur aut odit aut fugit,
                    </p>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="single-about-add-info">
                          <h3>phone</h3>
                          <p>987-123-6547</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="single-about-add-info">
                          <h3>email</h3>
                          <p>browny@info.com</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="single-about-add-info">
                          <h3>website</h3>
                          <p>www.brownsine.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-offset-1 col-sm-5">
                  <div className="single-about-img">
                    <img src={profile_image} alt="profile_image" />
                    <div className="about-list-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        {/* / li */}
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" aria-hidden="true" />
                          </a>
                        </li>
                        {/* / li */}
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        {/* / li */}
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        {/* / li */}
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                        {/* / li */}
                      </ul>
                      {/* / ul */}
                    </div>
                    {/* /.about-list-icon */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/.about*/}
        {/*about end */}
        {/*education start */}
        <section id="education" className="education">
          <div className="section-heading text-center">
            <h2>education</h2>
          </div>
          <div className="container">
            <div className="education-horizontal-timeline">
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2008 - 2010</h2>
                      <h3>
                        master <span>of </span> computer science
                      </h3>
                    </div>
                    {/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">university of north carolina</h4>
                        <h5>north carolina, USA</h5>
                        <p className="description">
                          Duis aute irure dolor in reprehenderit in vol patate velit esse cillum
                          dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat
                          non proident.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2004 - 2008</h2>
                      <h3>
                        bachelor <span>of </span> computer science
                      </h3>
                    </div>
                    {/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">university of north carolina</h4>
                        <h5>north carolina, USA</h5>
                        <p className="description">
                          Duis aute irure dolor in reprehenderit in vol patate velit esse cillum
                          dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat
                          non proident.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2004 - 2008</h2>
                      <h3>
                        bachelor <span>of </span> creative design
                      </h3>
                    </div>
                    {/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span
                        className="single-timeline-horizontal spacial-horizontal-line
									"
                      />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">university of bolton</h4>
                        <h5>bolton, united kingdome</h5>
                        <p className="description">
                          Duis aute irure dolor in reprehenderit in vol patate velit esse cillum
                          dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat
                          non proident.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/.education*/}
        {/*education end */}
        {/*skills end */}
        {/*experience start */}
        <section id="experience" className="experience">
          <div className="section-heading text-center">
            <h2>experience</h2>
          </div>
          <div className="container">
            <div className="experience-content">
              <div className="main-timeline">
                <ul>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>2018 - Present</h2>
                            <h3>creative director</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i className="fa fa-circle" aria-hidden="true" />
                                </span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol patate velit esse
                                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat
                                cupidatat non proident.
                              </p>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                    </div>
                    {/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i className="fa fa-circle" aria-hidden="true" />
                              </span>
                              2016 - 2018
                            </h2>
                            <h3>associate design director</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-5">
                          <div className="timeline">
                            <div className="timeline-content text-right">
                              <h4 className="title">hoplony tech limited</h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol patate velit esse
                                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat
                                cupidatat non proident.
                              </p>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-offset-1 col-md-5 experience-time-main">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i className="fa fa-circle" aria-hidden="true" />
                              </span>
                              2016 - 2018
                            </h2>
                            <h3>associate design director</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                      </div>
                    </div>
                    {/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>2013 - 2016</h2>
                            <h3>senior UI/UX designer</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i className="fa fa-circle" aria-hidden="true" />
                                </span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol patate velit esse
                                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat
                                cupidatat non proident.
                              </p>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                    </div>
                    {/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i className="fa fa-circle" aria-hidden="true" />
                              </span>
                              2012 - 2013
                            </h2>
                            <h3>UI/UX designer</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-5">
                          <div className="timeline">
                            <div className="timeline-content text-right">
                              <h4 className="title">hoplony tech limited</h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol patate velit esse
                                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat
                                cupidatat non proident.
                              </p>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-offset-1 col-md-5 experience-time-main">
                          <div className="experience-time">
                            <h2>
                              <span>
                                <i className="fa fa-circle" aria-hidden="true" />
                              </span>
                              2012 - 2013
                            </h2>
                            <h3>UI/UX designer</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                      </div>
                    </div>
                    {/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>2010 - 2012</h2>
                            <h3>frontend developer</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i className="fa fa-circle" aria-hidden="true" />
                                </span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p className="description">
                                Duis aute irure dolor in reprehenderit in vol patate velit esse
                                cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat
                                cupidatat non proident.
                              </p>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                    </div>
                    {/*/.single-timeline-box*/}
                  </li>
                </ul>
              </div>
              {/*.main-timeline*/}
            </div>
            {/*.experience-content*/}
          </div>
        </section>
        {/*/.experience*/}
        {/*experience end */}
        {/*profiles start */}
        <section id="profiles" className="profiles">
          <div className="profiles-details">
            <div className="section-heading text-center">
              <h2>profiles</h2>
            </div>
            <div className="container">
              <div className="profiles-content">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-themeforest" />
                        </a>
                        <div className="profile-icon-name">themeforest</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-themeforest" />
                          </a>
                          <div className="profile-icon-name">themeforest</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-dribbble" />
                        </a>
                        <div className="profile-icon-name">dribbble</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-dribbble" />
                          </a>
                          <div className="profile-icon-name">dribbble</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-behance-logo" />
                        </a>
                        <div className="profile-icon-name">behance</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-behance-logo" />
                          </a>
                          <div className="profile-icon-name">behance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile profile-no-border">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-github-logo" />
                        </a>
                        <div className="profile-icon-name">github</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-github-logo" />
                          </a>
                          <div className="profile-icon-name">github</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-border" />
                <div className="row">
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-flickr-website-logo-silhouette" />
                        </a>
                        <div className="profile-icon-name">flickR</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-flickr-website-logo-silhouette" />
                          </a>
                          <div className="profile-icon-name">flickR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-smug" />
                        </a>
                        <div className="profile-icon-name">smungMung</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-smug" />
                          </a>
                          <div className="profile-icon-name">smungMung</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-squarespace-logo" />
                        </a>
                        <div className="profile-icon-name">squareSpace</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-squarespace-logo" />
                          </a>
                          <div className="profile-icon-name">squareSpace</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-profile profile-no-border">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-bitbucket-logotype-camera-lens-in-perspective" />
                        </a>
                        <div className="profile-icon-name">bitBucket</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href="">
                            <i className="flaticon-bitbucket-logotype-camera-lens-in-perspective" />
                          </a>
                          <div className="profile-icon-name">bitBucket</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/.profiles*/}
        {/*profiles end */}
        {/*portfolio start */}
        <section id="portfolio" className="portfolio">
          <div className="portfolio-details">
            <div className="section-heading text-center">
              <h2>portfolio</h2>
            </div>
            <div className="container">
              <div className="portfolio-content">
                <div className="isotope">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="item">
                        <img src={p1} alt="portfolio image" />
                        <div className="isotope-overlay">
                          <a href="#">ui/ux design</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                      <div className="item">
                        <img src={p2} alt="portfolio image" />
                        <div className="isotope-overlay">
                          <a href="#">ui/ux design</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4">
                      <div className="item">
                        <img src={p3} alt="portfolio image" />
                        <div className="isotope-overlay">
                          <a href="#">web design</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4">
                      <div className="item">
                        <img src={p4} alt="portfolio image" />
                        <div className="isotope-overlay">
                          <a href="#">web development</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                      <div className="item">
                        <img src={p5} alt="portfolio image" />
                        <div className="isotope-overlay">
                          <a href="#">web development</a>
                        </div>
                        {/* /.isotope-overlay */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/*/.isotope*/}
              </div>
              {/*/.gallery-content*/}
            </div>
            {/*/.container*/}
          </div>
          {/*/.portfolio-details*/}
        </section>
        {/*/.portfolio*/}
        {/*portfolio end */}

        {/*/.clients*/}
        {/*clients end */}
        {/*contact start */}
        <section id="contact" className="contact">
          <div className="section-heading text-center">
            <h2>contact me</h2>
          </div>
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-form">
                      <form>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name*"
                                name="name"
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email*"
                                name="email"
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                name="subject"
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                rows={8}
                                id="comment"
                                placeholder="Message"
                                defaultValue={''}
                              />
                            </div>
                            {/*/.form-group*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="single-contact-btn">
                              <a className="contact-btn" href="#" role="button">
                                submit
                              </a>
                            </div>
                            {/*/.single-single-contact-btn*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                      </form>
                      {/*/form*/}
                    </div>
                    {/*/.contact-form*/}
                  </div>
                  {/*/.single-contact-box*/}
                </div>
                {/*/.col*/}
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-adress">
                      <div className="contact-add-head">
                        <h3>browny star</h3>
                        <p>uI/uX designer</p>
                      </div>
                      <div className="contact-add-info">
                        <div className="single-contact-add-info">
                          <h3>phone</h3>
                          <p>987-123-6547</p>
                        </div>
                        <div className="single-contact-add-info">
                          <h3>email</h3>
                          <p>browny@info.com</p>
                        </div>
                        <div className="single-contact-add-info">
                          <h3>website</h3>
                          <p>www.brownsine.com</p>
                        </div>
                      </div>
                    </div>
                    {/*/.contact-adress*/}
                    <div className="hm-foot-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        {/*/li*/}
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                        {/*/li*/}
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        {/*/li*/}
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        {/*/li*/}
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        {/*/li*/}
                      </ul>
                      {/*/ul*/}
                    </div>
                    {/*/.hm-foot-icon*/}
                  </div>
                  {/*/.single-contact-box*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.contact-content*/}
          </div>
          {/*/.container*/}
        </section>
        {/*/.contact*/}
        {/*contact end */}
        {/*footer-copyright start*/}
        <footer id="footer-copyright" className="footer-copyright">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <p>
                © copyright yourname. design and developed by{' '}
                <a href="https://www.themesine.com/">themesine</a>
              </p>
              {/*/p*/}
            </div>
            {/*/.text-center*/}
          </div>
          {/*/.container*/}
          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up " id="scroll-top" />
            </div>
          </div>
          {/*/.scroll-Top*/}
        </footer>
        {/*/.footer-copyright*/}
        {/*footer-copyright end*/}
        {/* Include all js compiled plugins (below), or include individual files as needed */}
        {/*modernizr.min.js*/}
        {/*bootstrap.min.js*/}
        {/* bootsnav js */}
        {/* jquery.sticky.js */}
        {/* for progress bar start*/}
        {/* progressbar js */}
        {/* appear js */}
        {/* for progress bar end */}
        {/*owl.carousel.js*/}
        {/*Custom JS*/}
      </main>
    </>
  );
}
