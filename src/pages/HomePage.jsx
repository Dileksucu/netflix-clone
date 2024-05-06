import React, { useEffect, useState } from "react";
import "../assets/css/home.css";
import { useDevice } from "../hooks/DeviceSize";
import DeviceType from "../enums/DeviceType";
import AddIcon from "@mui/icons-material/Add";
import { Button, Col, Flex, Input, Row } from "antd";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Typography } from "antd";
import validator from "validator";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const HomePage = () => {
  const device = useDevice();

  const navigate = useNavigate(); //Yönlendirme için kullandık

  const [firstSectionTitleTextSize, setFirstSectionTitleTextSize] = useState(); //bu ilk metin için
  const [
    firstSectionSubTitleFirstTextSize,
    setFirstSectionSubTitleFirstTextSize,
  ] = useState(); // ikinci alt metin
  const [
    firstSectionSubTitleSecondTextSize,
    setFirstSectionSubTitleSecondTextSize,
  ] = useState(); //üçüncü alt metin
  const [firstSectionContainerX, setFirstSectionContainerX] = useState(); //ekranın değişme boyutundaki x eksenin container alanı
  const [firstSectionContainerY, setFirstSectionContainerY] = useState(); //ekranın değişme boyutundaki y eksenin container alanı

  const [expandedIcon, setExpandedIcon] = useState(false)
  const [expandedIcon1, setExpandedIcon1] = useState(false)
  const [expandedIcon2, setExpandedIcon2] = useState(false)
  const [expandedIcon3, setExpandedIcon3] = useState(false)
  const [expandedIcon4, setExpandedIcon4] = useState(false)
  const [expandedIcon5, setExpandedIcon5] = useState(false)

  const setFirstSectionStyles = () => {
    switch (device) {
      case DeviceType.Mobile:
        setFirstSectionTitleTextSize("display-6"); //display ile web sitesi üzerinde nasıl konumlanacağını ayarlıyorum.
        setFirstSectionSubTitleFirstTextSize("fs-6"); //fs - font size
        setFirstSectionSubTitleSecondTextSize("fs-6");
        setFirstSectionContainerX("25%");
        setFirstSectionContainerY("10%");
        break;
      case DeviceType.Tablet:
        setFirstSectionTitleTextSize("display-5");
        setFirstSectionSubTitleFirstTextSize("fs-5");
        setFirstSectionSubTitleSecondTextSize("fs-6");
        setFirstSectionContainerX("25%");
        setFirstSectionContainerY("10%");
        break;
      case DeviceType.Desktop:
        setFirstSectionTitleTextSize("display-4");
        setFirstSectionSubTitleFirstTextSize("fs-4");
        setFirstSectionSubTitleSecondTextSize("fs-5");
        setFirstSectionContainerX("35%");
        setFirstSectionContainerY("10%");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFirstSectionStyles();
  }, [device]);

  //accordion cart'ın true false olduğunda icon değiştirme işlemi.
  const accordionChange = (key) => {
    if (key === 0) setExpandedIcon(!expandedIcon);
    else if (key === 1) setExpandedIcon1(!expandedIcon1);
    else if (key === 2) setExpandedIcon2(!expandedIcon2);
    else if (key === 3) setExpandedIcon3(!expandedIcon3);
    else if (key === 4) setExpandedIcon4(!expandedIcon4);
    else if (key === 5) setExpandedIcon5(!expandedIcon5);
  };

  const [emailError, showNoValidEmail] = useState(false);
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = (e) => {
    if (e.target?.value && e.target.value.match(isValidEmail)) {
      showNoValidEmail(false);
    } else {
      showNoValidEmail(true);
    }
  };

  return (
    <>
      <div id="first-section">
        <div
          style={{
            position: "absolute",
            zIndex: 100, //üst üste gelen elemanlardan birinin daha üste olması için kullanılır.
            top: firstSectionContainerX,
            left: firstSectionContainerY,
            right: firstSectionContainerY,
            textAlign: "center",
          }}
        >
          <div className={`text-white fw-bold ${firstSectionTitleTextSize}`}>
            Sınırsız film, dizi ve çok daha fazlası
          </div>
          <div
            className={`text-white pt-3 ${firstSectionSubTitleFirstTextSize}`}
          >
            İstediğiniz yerde izleyin. İstediğini zaman iptal edin.
          </div>
          <div
            className={`text-white pt-4 ${firstSectionSubTitleSecondTextSize}`}
          >
            İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
            için tek yapmanız gereken e-posta adresinizi girmek.
          </div>
          <Row
            gutter={[16, 16]}
            className="justify-content-center gap-4 mt-4"
            style={{ width: "100%" }}
          >
            <Col xs={24} sm={24} md={12} lg={12} xl={10}>
              <Input
                id="first-section-input"
                size="large"
                placeholder="E-Posta Adresi"
                onChange={(e) => validateEmail(e)}
                style={{
                  width: "100%",
                  height: "49px",
                  backgroundColor: "#171514",
                }}
              />
              <br />
              <span
                style={{ fontWeight: "bold", color: "red", fontSize: "large" }}
              >
                {emailError}
              </span>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={6}>
              <Button
                type="primary"
                size={"large"}
                disabled={emailError}
                onClick={() => navigate("/movies")} //movies sayfasına yönlendirme yaptık
                style={{
                  backgroundColor: "#FF0000",
                  fontSize: "22px",
                  fontWeight: "bold",
                  height: "auto",
                  width: "50%",
                }}
              >
                Başlayın
              </Button>
            </Col>
          </Row>
        </div>
        <img
          style={{ height: "95vh", width: "100%" }} //100vh yaparsan height kısmını 1 sayfa boyutu alır
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/bfcd49ad-2a04-4776-9872-3e9039a1bee5/TR-tr-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>

      <div
        id="second-section"
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#000000",
          padding: "3rem",
          borderTop: "8px solid #232323",
        }}
      >
        <Row gutter={[16, 16]} className="py-5 mx-4 align-content-center">
          {/* Normalde bu kısımda iki kolon bulunuyor; ilk kolonumuz bu. Büyük ve en büyük ekranlar 2 kolonlu olacak.*/}
          <Col
            xs={24} //en küçük ekranlar
            sm={24} // küçük ekranlar
            md={24} // orta ekranlar
            lg={14} // büyük ekranlar --> bu benim web ekranı
            xl={14} // en büyük ekran için
            className="align-content-center"
          >
            <Title
              level={1}
              className="text-white text-center my-auto pb-3"
              style={{ fontSize: "3rem", fontWeight: "900" }}
            >
              Televizyonunuzda izleyin
            </Title>
            <p
              className="text-white text-center fs-5"
              style={{ fontSize: "calc(1rem + 1vw);" }} //
            >
              Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              oynatıcılar ve daha fazlasında seyredin.
            </p>
          </Col>

          {/* Burası da 2.kolonumuz.  */}
          <Col
            xs={24} //daha küçük telefon
            sm={24} //telefon ekranı
            md={24} //tablet ekranı
            lg={10} //Bu benim web ekranı boyutu
            xl={10} //Monitör ekranı
            className="tv-container " // css ekledim.
          >
            {/* Flex --> X- Y Ekseninde elementleri hizalamaya yarar. */}
            <Flex justify="center">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="TV Screen"
                className={`w-100 tv-image`}
              />
            </Flex>
            {/* autoPlay : Bir butona tıklanmadan, video kendiliğinden başlasın, loop : video hep başa dönsün, hiç bitmesin diye ekledim. (netflix sitesinde vardı bunlar)*/}
            <video className="tv-video" autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </Col>
        </Row>
      </div>

      <div
        id="third-section"
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#000000",
          padding: "3rem",
          borderTop: "8px solid #232323",
        }}
      >
        <Row gutter={[16, 16]} className="py-5 mx-4 align-content-center">
          <Col
            xs={24} //daha küçük telefon
            sm={24} //telefon ekranı
            md={24} //tablet ekranı
            lg={10} //Bu benim web ekranı boyutu
            xl={10}
            className="tv-container " // css ekledim.
          >
            {/* Flex --> X- Y Ekseninde elementleri hizalamaya yarar.*/}
            <Flex justify="center">
              <div className="position-relative ">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt="TV Screen"
                  className={`w-100 tv-image`}
                />

                {/* Resim altındaki animasyonlu kısım için grid oluşturuldu*/}
                {/* position-absolute --> bütün sayfa yüzeyin de herhangi başka bir elementi ittirmeden üzerilerin de kaydırma yapılır */}
                <Row className="third-section-image p-2 position-absolute w-75 ">
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={6}
                    xl={6}
                    className="third-section-small-image "
                  >
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                      alt=""
                      className="third-section-small-image"
                    />
                  </Col>

                  <Col xs={14} sm={10} md={9} lg={11} xl={10}>
                    <div className="fw-bold text-white text-align-center ms-1">
                      Stranger Things
                    </div>
                    <div className="fw-bold text-align-center ms-1 third-section-text-color">
                      İndiriliyor...
                    </div>
                  </Col>

                  <Col
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="third-section-gift w-48 h-48"
                    aria-hidden="true"
                  ></Col>
                </Row>
              </div>
            </Flex>
          </Col>

          <Col
            xs={24} //en küçük ekranlar
            sm={24} // küçük ekranlar
            md={24} // orta ekranlar
            lg={14} // büyük ekranlar --> bu benim web ekranı
            xl={14} // en büyük ekran için
            className="align-content-center order-first order-sm-first order-md-first order-lg-last order-xl-last"
          >
            <Title
              level={1}
              className="text-white text-center my-auto pb-3 text-lg-left "
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                justifyContent: "start",
              }}
            >
              Çevrimdışı izlemek için içerikleri indirin
            </Title>
            <p
              className="text-white text-center fs-5"
              style={{ fontSize: "calc(1rem + 1vw);" }} //
            >
              En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek
              bir şeyleriniz olsun.
            </p>
          </Col>
        </Row>
      </div>

      <div
        id="four-section"
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#000000",
          padding: "3rem",
          borderTop: "8px solid #232323",
        }}
      >
        <Row className="py-5 mx-4 align-content-center text-align-left">
          <Col
            xs={24} //en küçük ekranlar
            sm={24} // küçük ekranlar
            md={24} // orta ekranlar
            lg={13} // büyük ekranlar --> bu benim web ekranı
            xl={14} // en büyük ekran için
            className="align-content-center"
          >
            <Title
              className="text-white text-center my-auto pb-3 "
              style={{ fontSize: "3rem", fontWeight: "900" }}
            >
              İstediğiniz her yerde izleyin
            </Title>
            <p
              className="text-white text-center fs-5"
              style={{ fontSize: "3rem" }}
            >
              Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve
              dizi izleyin.
            </p>
          </Col>

          <Col
            xs={24} //en küçük ekranlar
            sm={24} // küçük ekranlar
            md={24} // orta ekranlar
            lg={10} // büyük ekranlar --> bu benim web ekranı - büyük ekranda 2 parçaya böldüm 24 dörtlük alanı
            xl={10} // en büyük ekran için
            className=" tv-container  "
          >
            <Flex justify="center">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                alt=""
                className={`w-100 tv-image `}
              />
            </Flex>
            {/* autoPlay : Bir butona tıklanmadan, video kendiliğinden başlasın, loop : video hep başa dönsün, hiç bitmesin diye ekledim. (netflix sitesinde vardı bunlar)*/}
            <video className="four-tv-video " autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </Col>
        </Row>
      </div>

      <div
        id="five-section"
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#000000",
          padding: "3rem",
          borderTop: "8px solid #232323",
        }}
      >
        <Row className="py-5 mx-4 align-content-center w-75">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Title
              className="text-white text-center"
              style={{ fontSize: "3rem", fontWeight: "900" }}
            >
              Sıkça Sorulan Sorular
            </Title>

            <Accordion
              style={{
                backgroundColor: "rgb(45,45,45)",
                marginBottom: "10px",
                marginTop: "50px",
              }}
              onChange={(e) => accordionChange(0)}
            >
              <AccordionSummary
                className="p-3 fs-4 fw-normal text-white AccordionSummary"
                // expandIcon={ expandedIcon ?  <AddIcon className="five-section-icons" /> : <ClearOutlinedIcon/> }
                expandIcon={
                  <AddIcon
                    className="five-section-icons"
                    style={{ rotate: expandedIcon && "45deg" }}
                  />
                }
              >
                Netflix Nedir ?
              </AccordionSummary>

              <AccordionDetails className="fs-4 fw-normal text-white ">
                Netflix; internet bağlantılı binlerce cihazda ödüllü diziler,
                filmler, animeler, belgeseller ve daha fazlasını içeren geniş
                bir arşiv sunan bir streaming hizmetidir. Tek bir reklam
                olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz -
                hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek
                yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler
                ekleniyor!
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "rgb(45,45,45)",
                marginBottom: "10px",
              }}
              onChange={(e) => accordionChange(1)}
            >
              <AccordionSummary
                className="p-3 fs-4 fw-normal text-white AccordionSummary"
                expandIcon={
                  <AddIcon
                    className="five-section-icons"
                    style={{ rotate: expandedIcon1 && "45deg" }}
                  />
                }
                //rotate => deg vererek ıconu değiştirebiliyoruz.
              >
                Netflix'in maliyeti nedir ?
              </AccordionSummary>

              <AccordionDetails className="fs-4 fw-normal text-white ">
                Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü
                bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle
                izleyin. Aylık plan ücretleri 119,99 TL ile 229,99 TL arasında
                değişmektedir. Ekstra maliyet yok, sözleşme yok.
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "rgb(45,45,45)",
                marginBottom: "10px",
              }}
              onChange={(e) => accordionChange(2)}
            >
              <AccordionSummary
                className="p-3 fs-4 fw-normal text-white AccordionSummary"
                expandIcon={
                  <AddIcon
                    className="five-section-icons"
                    style={{ rotate: expandedIcon2 && "45deg" }}
                  />
                }
              >
                Nereden izleyebilirim ?
              </AccordionSummary>

              <AccordionDetails className="fs-4 fw-normal text-white ">
                İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda
                netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar,
                tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix
                uygulamasını sunan, internet bağlantılı herhangi bir cihazda
                anında izlemek için Netflix hesabınızla oturum açın. Favori
                içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da
                indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan
                izlemek için indirilenleri kullanın. Netflix'i her yere
                beraberinizde götürün.
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "rgb(45,45,45)",
                marginBottom: "10px",
              }}
              onChange={(e) => accordionChange(3)}
            >
              <AccordionSummary
                className="p-3 fs-4 fw-normal text-white AccordionSummary"
                expandIcon={
                  <AddIcon
                    className="five-section-icons"
                    style={{ rotate: expandedIcon3 && "45deg" }}
                  />
                }
              >
                Nasıl iptal ederim ?
              </AccordionSummary>

              <AccordionDetails className="fs-4 fw-normal text-white ">
                Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt
                yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal
                edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz
                zaman başlatın veya durdurun.
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "rgb(45,45,45)",
                marginBottom: "10px",
              }}
              onChange={(e) => accordionChange(4)}
            >
              <AccordionSummary
                className="p-3 fs-4 fw-normal text-white AccordionSummary"
                expandIcon={
                  <AddIcon
                    className="five-section-icons"
                    style={{ rotate: expandedIcon4 && "45deg" }}
                  />
                }
              >
                Netflix'te ne izleyebilirim ?
              </AccordionSummary>

              <AccordionDetails className="fs-4 fw-normal text-white ">
                Netflix, uzun metrajlı filmler, belgeseller, diziler ve
                programlar, anime, ödüllü Netflix orijinal içerikleri ve daha
                fazlasından oluşan kapsamlı bir kütüphaneye sahiptir.
                İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "rgb(45,45,45)",
                marginBottom: "10px",
              }}
              onChange={(e) => accordionChange(5)}
            >
              <AccordionSummary
                className="p-3 fs-4 fw-normal text-white AccordionSummary"
                expandIcon={
                  <AddIcon
                    className="five-section-icons"
                    style={{ rotate: expandedIcon5 && "45deg" }}
                  />
                }
              >
                Netflix çocuklar için uygun mudur ?
              </AccordionSummary>

              <AccordionDetails className="fs-4 fw-normal text-white ">
                Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece
                izlenebilecek dizi ve filmleri kendilerine özel bir alanda
                izlemelerini sağlarken kontrolü ebeveynlere verir. Çocuk
                profillerinde bulunan PIN korumalı ebeveyn kontrolleri
                sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik
                düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz
                belirli içerikleri engelleyebilirsiniz.
              </AccordionDetails>
            </Accordion>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Title
              className="text-white text-center"
              style={{ fontSize: "1.5rem", fontWeight: "400", margin: "70px" }}
            >
              İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
              için tek yapmanız gereken e-posta adresinizi girmek.
            </Title>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Input
              id="first-section-input"
              size="large"
              placeholder="E-Posta Adresi"
              onChange={(e) => validateEmail(e)}
              style={{
                width: "45%",
                height: "65px",
                backgroundColor: "#171514",
                borderRadius: "5px",
                marginLeft: "150px",
              }}
            />

            <Button
              type="primary"
              size={"large"}
              disabled={emailError}
              style={{
                backgroundColor: "#FF0000",
                fontSize: "25px",
                fontWeight: "bold",
                height: "65px",
                width: "25%",
                borderRadius: " 8px",
                marginLeft: "50px",
              }}
            >
              Başlayın
            </Button>

            <br />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
                fontSize: "large",
                marginLeft: "200px",
              }} //margin?
            >
              {emailError}
            </span>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
