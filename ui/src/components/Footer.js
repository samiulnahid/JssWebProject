import { Image, RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <>
      {/* <!-- info section --> */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            {/* <small>{JSON.stringify(props)}</small> */}

            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>
                  <Text field={props.fields?.AddressHeadline} />
                </h4>

                <div className="contact_link_box">
                  {/* Dynamic Address */}
                  {props.fields?.ContactAddress.map((item) => {
                    return (
                      <a key={item.id} href={item.fields?.SocialLink.value.href}>
                        <Image field={item.fields?.SocialIcon.value} />
                        <span>{item.fields?.SocialName.value} </span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="info_social">
                {/* Dynamic Social Link */}
                {props.fields?.SocialLink.map((item) => {
                  return (
                    <a key={item.id} href={item.fields?.SocialLink.value.href}>
                      <Image field={item.fields?.SocialIcon.value} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>
                  <Text field={props.fields?.InfoHeadline} />
                </h4>

                <p>
                  <RichText field={props.fields?.InfoDescription} />
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>
                  <Text field={props.fields?.LinkHeadline} />
                </h4>
                <div className="info_links">
                  {/* Dynamic Own Links */}
                  {props.fields?.LinkNavigation.map((item) => {
                    return (
                      <Link key={item.id} className="active" to={item.fields?.PageUrl.value.href}>
                        {item.fields?.NavigationTitle.value}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>
                <Text field={props.fields?.SubHeadline} />
              </h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">
                  <Text field={props.fields?.CTAText} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end info section --> */}
      {/* <!-- footer section --> */}
      <section className="footer_section">
        <div className="container">
          <p>
            <span id="displayYear"></span> All Rights Reserved By
            <a href="https://byteheart.com"> Byteheart</a>
          </p>
        </div>
      </section>
      {/* <!-- footer section --> */}
    </>
  );
}
