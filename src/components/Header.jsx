function Header(props) {
  const {
    vGlobalLiving,
    snPhmUT,
    mockupLogo14,
    tinTc,
    tiLiuBnHng,
    phone,
    ngNhpILCtv,
    line1,
    iconFacebook,
    line2,
    image1,
    line3,
    tvShow,
  } = props;
  console.log(vGlobalLiving);
  return (
    <header className="header inika-normal-sunset-pearl-24px">
      <h1 className="v-global-living"> {vGlobalLiving} </h1>
      <div className="sn-phm-u-t"> {snPhmUT} </div>
      <div className="overlap-group">
        <img
          className="mockup-logo1-4"
          src={mockupLogo14}
          alt="Mockup LOGO1 4"
        />
        <div className="tin-tc inika-normal-sunset-pearl-24px">{tinTc}</div>
      </div>
      <div className="ti-liu-bn-hng">{tiLiuBnHng}</div>
      <div className="flex-col">
        <div className="phone jost-normal-white-22px">{phone}</div>
        <p className="ng-nhp-i-1-ctv inika-normal- sunset-pearl-24px">
          {ngNhpILCtv}
        </p>
      </div>
      <img className="line-1" src={line1} alt="Line 1" />
      <img className="icon-facebook" src={iconFacebook} alt="icon-facebook" />
      <img className="line-2" src={line2} alt="Line 2" />
      <img className="image-1" src={image1} alt="image 1" />
      <img className="line-3" src={line3} alt="Line 3" />
      <img className="tv-show" src={tvShow} alt="TV Show" />
    </header>
  );
}

export default Header;
