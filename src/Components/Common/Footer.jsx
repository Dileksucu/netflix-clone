import { Col, Row } from "antd";
import React from "react";

const Footer = () => {

  const footer = [
    { title: "SSS", url: "https://help.netflix.com/tr/node/412" },
    { title: "Yardım Merkezi", url: "https://help.netflix.com/tr/" },
    {
      title: "Hesap",
      url: "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount",
    },
    { title: "Medya Merkezi", url: "https://media.netflix.com/tr/" },
    {
      title: "Yatırımcı İlişkileri",
      url: "https://help.netflix.com/tr/node/412",
    },
    {
      title: "Yatırımcı İlişkileri",
      url: "https://help.netflix.com/tr/node/412",
    },
    {
      title: "İş İmkanları",
      url: "https://help.netflix.com/tr/node/412",
    },
    {
      title: "Hediye Kartı Kullan",
      url: "https://help.netflix.com/tr/node/412",
    },
    { title: "İzleme Yolları", url: "https://help.netflix.com/tr/node/412" },
    { title: "Kullanım Koşulları", url: "https://help.netflix.com/tr/" },
    {
      title: "Gizlilik",
      url: "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount",
    },
    { title: "Çerez Tercihleri", url: "https://media.netflix.com/tr/" },
    {
      title: "Kurumsal Bilgiler",
      url: "https://help.netflix.com/tr/node/412",
    },
    {
      title: "Bize Ulaşın ",
      url: "https://help.netflix.com/tr/node/412",
    },
    {
      title: "Hız Testi",
      url: "https://help.netflix.com/tr/node/412",
    },
    {
      title: "Yasal Hükümler",
      url: "https://help.netflix.com/tr/node/412",
    },
    
  ];

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "#000000",
          padding: "3rem",
          borderTop: "8px solid #232323",
        }}
      >
        <Row className=" py-5 mx-4  w-75 ">
          {footer.map((item) => {
            return (
              <Col lg={6} className="mt-3">
                <a style={{ color: "white" }} href={item.url}>
                  {item.title}
                </a>
              </Col>
            );
          })}

        </Row>
      </div>
    </>
  );
};

export default Footer;
