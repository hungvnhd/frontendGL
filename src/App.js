import "./App.css";
import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <Homepage {...trangChData} />
    </div>
  );
}

export default App;
const headerData = {
  vGlobalLiving: "Về Global Living",
  snPhmUT: "Sản phẩm đầu tư",
  mockupLogo14: "mockup-logo1-4.png",
  tinTc: "Tin tức",
  tiLiuBnHng: "Tài liệu bán hàng",
  phone: "0931 626 909",
  ngNhpILCtv: "Đăng nhập Đại lý/ CTV",
  linel: "line-1.svg",
  iconFacebook: "facebook.png",
  line2: "line-1.svg",
  image1: "image-1.png",
  line3: "line-1.svg",
  tvshow: "tv-show.png",
};
const footerData = {
  flexCol: "rectangle-170.png",
  hotline0931626909: "Hotline: 0931626909",
  mockupLogo14: "mockup-logo1-4-1.png",
  cngTyCPhnGlobalLiving: "CÔNG TY CỔ PHẦN GLOBAL LIVING",
  iconFacebook: "facebook.png",
  tvShow: "tv-show.png",
  image1: "image-1.png",
  vnPhngHNi: "Văn phòng Hà Nội",
  vnPhngNhaTrang: "Văn phòng Nha trang",
  vnPhngHChMinh: "Văn phòng Hồ Chí Minh",
  toongTrngThiS:
    "TOONG TRÀNG THI - Số 8 Tràng Thi Hàng Trống - Quận Hoàn Kiếm - HÀ NỘI",
  coworkGoldCoast:
    "COWORK GOLD COAST - Tầng 9, Toà nhà Gold Coast - Số 1 Trần Hưng Đạo, P. Lộc Thọ, TP NHA TRANG",
  sunwahInnovations:
    "SUNWAH INNOVATIONS - Tầng 6 - Tháp Golden - Toà nhà Sunwah Pearl 99 Nguyễn Hữu Cảnh Phường 2, Quận Bình Thạnh TP HỒ CHÍ MINH",
};
const trangChData = {
  rectangle1: "rectangle-1.png",
  vTrThoInT: (
    <React.Fragment>
      {" "}
      VỊ TRÍ: Thảo Điền, Tp. Hồ Chí Minh <br /> TỔNG DIỆN TÍCH XÂY DỰNG: 423m2 -
      3 tầng <br /> HẠNG MỤC THI CÔNG: Xây dựng cơ bản và hoàn thiện nội thất{" "}
      <br /> PHONG CÁCH THIẾT KẾ: concept Indochine (phong cách Đông Dương{" "}
    </React.Fragment>
  ),
  theVillaHousse: "THE VILLA HOUSSE",
  rectangle4: "rectangle-4.png",
  rectangle6: "rectangle-6.png",
  rectangle5: "rectangle-5.png",
  nhVThngHiu: "ĐỊNH VỊ THƯƠNG HIỆU",
  tmNhn: "TẦM NHÌN",
  sMnh: "SỨ MỆNH",
  battleNet: "battle-net.png",
  bbb: "bbb.png",
  refresh: "refresh.png",
  title: "CORE PRODUCTS",
  snPhmCtLi: "SẢN PHẨM CỐT LÕI",
  rectangle177: "rectangle-177.png",
  ngKNhnTVn: "ĐĂNG KÝ NHẬN TƯ VẤN",
  hyGlobalLiving: (
    <React.Fragment>
      {" "}
      Hãy để Global Living đồng hành cùng bạn trên hành trình đầu tư <br /> bất
      động sản quốc tế và trở thành một công dân đẳng cấp <br /> toàn cầu{" "}
    </React.Fragment>
  ),
  hVTn: "Họ và tên",
  email: "Email",
  sInThoi: "Số điện thoại",
  snPhmQuanTm: "Sản phẩm quan tâm",
  mcUTDKin: "Mức đầu tư dự kiến",
  ngK: "Đăng ký",
  place: "CONTACT",
  text8: "<",
  rectangle184: "rectangle-184.png",
  text9: ">",
  btNgSnNhCHungary: (
    <React.Fragment>
      {" "}
      BẤT ĐỘNG SẢN <br /> ĐỊNH CƯ HUNGARY{" "}
    </React.Fragment>
  ),
  chngTrnhCpTh:
    "Chương trình cấp thẻ cư trú nhân Hungary thông qua hình thức đầu tư bất động sản. Vớ mức đầu tư tối thiểu chỉ từ 175k Euro - tương đương khoảng 4.6 tỷ VND, Nhà đầu tư sẽ vừa hữu tài sản nhà đất ở địa thế vàng - Trái tim của Châu Âu, vừa mang lại cho cả 3 thế hệ g đình những đặc quyền vô giá của một công dân toàn cầu.",
  chiPhLmTh: "CHI PHÍ LÀM THẺ",
  thiGianDKin: "THỜI GIAN DỰ KIẾN",
  chiPhUT: "CHI PHÍ ĐẦU TƯ TỐI THIỂU",
  x16TNg: "1.6 tỉ đồng",
  x46TNg: "4.6 tỉ đồng",
  address: "3 tháng",
  tmHiuThm: "Tìm hiểu thêm >>",
  iconEye: "eye.png",
  overlapGroup1: "rectangle-127.png",
  businessPartners: "BUSINESS PARTNERS",
  iTcCaChngTi: "ĐỐI TÁC CỦA CHÚNG TÔI",
  rectangle178: "rectangle-178.png",
  rectangle179: "rectangle-179.png",
  rectangle180: "rectangle-180.png",
  rectangle181: "rectangle-178.png",
  rectangle183: "rectangle-179.png",
  rectangle182: "rectangle-180.png",
  hThngPhnPhicQuyn: "HỆ THỐNG PHÂN PHỐI ĐỘC QUYỀN",
  thamGiaNgayTr: (
    <React.Fragment>
      {" "}
      Tham gia ngay để trở thành Đại lý/Cộng tác viên độc quyền <br /> và nhận
      những thông tin, tài liệu đắt giá nhất về thị trường <br /> đầu tư bất
      động sản quốc tế.{" "}
    </React.Fragment>
  ),
  ngKNgay: "Đăng ký ngay",
  text10: "<",
  headerProps: headerData,
  footerProps: footerData,
};
