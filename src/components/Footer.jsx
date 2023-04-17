function Footer(props) {
  const {
    flexCol,
    hotline0931626909,
    mockupLogo14,
    cngTyCPhnGlobalLiving,
    iconFacebook,
    tvshow,
    image1,
    vnPhngHNi,
    vnPhngNhaTrang,
    vnPhngHChMinh,
    toongTrngThis,
    coworkGoldCoast,
    sunwahInnovations,
  } = props;
  return (
    <div className="footer">
      <div className="footer-1">
        <div
          className="flex-col-1"
          style={{ backgroundImage: `url(${flexCol})` }}
        >
          <div className="flex-col-2">
            <div className="overlap-group1-1">
              <div className="hotline-0931626909 inter-medium-sunset-pearl-24px">
                {hotline0931626909}
              </div>
              <img
                className="mockup-logo1-4-1"
                src={mockupLogo14}
                alt="Mockup LOGO1 4"
              />
              <p className="cng-ty-c-phn-global-living imfelldoublepicasc-regular-normal- sunset-pearl-30px">
                {cngTyCPhnGlobalLiving}
              </p>
              <img
                className="icon-facebook-1"
                src={iconFacebook}
                alt="icon-facebook"
              />
              <img className="tv-show-1" src={tvshow} alt="TV Show" />
              <img className="image-1-1" src={image1} alt="image 1" />
            </div>
            <div className="vn-phng-container inika-normal-sunset-pearl-24px-2">
              <div className="vn-phng-h-ni">{vnPhngHNi}</div>
              <div className="vn-phng-nha-trang"> {vnPhngNhaTrang}</div>
              <p className="vn-phng-h-ch-minh"> {vnPhngHChMinh} </p>
            </div>
          </div>
          <div className="flex-row-2 inika-normal-white-24px">
            <p className="toong-trng-thi-s"> {toongTrngThis} </p>
            <p className="cowork-gold-coast"> {coworkGoldCoast} </p>
            <p className="sunwah-innovations"> {sunwahInnovations} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
