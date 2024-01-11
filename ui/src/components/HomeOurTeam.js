import React from 'react';

const HomeOurTeam = ({ fields }) => {
  return (
    <section className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2 className="">{fields?.heading?.value}</h2>
        </div>

        <div className="team_container">
          <div className="row">
            {fields?.TeamMember.map((item) => (
              <div key={item.id} className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src={item?.fields?.Image?.value?.src} className="img1" alt="img" />
                  </div>
                  <div className="detail-box">
                    <h5>{item?.fields?.Name?.value}</h5>
                    <p>{item?.fields?.Designation?.value}</p>
                  </div>
                  <div className="social_box">
                    {item?.fields?.Facebook?.value?.href && (
                      <a href={item?.fields?.Facebook?.value?.href}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    )}
                    {item?.fields?.Twitter?.value?.href && (
                      <a href={item?.fields?.Twitter?.value?.href}>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    )}
                    {item?.fields?.Linkedin?.value?.href && (
                      <a href={item?.fields?.Linkedin?.value?.href}>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    )}
                    {item?.fields?.Instagram?.value?.href && (
                      <a href={item?.fields?.Instagram?.value?.href}>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    )}
                    {item?.fields?.Youtube?.value?.href && (
                      <a href={item?.fields?.Youtube?.value?.href}>
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeOurTeam;
