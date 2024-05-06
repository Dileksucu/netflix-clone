import React, { useEffect, useState } from "react";
import LanguageIcon from "../../assets/Icons/LanguageIcon";
import { Logo } from "../../assets/Icons/Logo";
import DeviceType from "../../enums/DeviceType";
import { useDevice } from "../../hooks/DeviceSize";
import { Button, Col, Row, Select, Space,Flex} from "antd";


const HomePageNavBar = () => {

  const deviceType = useDevice(); //
  
  const [padding, setPadding] = useState("");
  const [selectBoxWidth, setSelectBoxWidth] = useState(0);

  useEffect(() => {
    switch (deviceType) {

      case DeviceType.Mobile:
        setPadding("1rem");
        setSelectBoxWidth(80);
        break;

      case DeviceType.Tablet:
        setPadding("5rem");
        setSelectBoxWidth(80);
        break;

      case DeviceType.Desktop:
        setPadding("15rem");
        setSelectBoxWidth(120);
        break;
        
      default:
        break;
    }
  }, [deviceType]);

  const items = [
    {
      value: "TR",
      label: "Türkçe"
    },
    {
      value: "US",
      label: "İngilizce"
    },
  ]

  const itemsWithIcon = [
    {
      value: "TR",
      label: (
        <>
          <LanguageIcon /> Türkçe
        </>
      ),
    },
    {
      value: "US",
      label: (
        <>
          <LanguageIcon /> İngilizce
        </>
      ),
    },
  ];


  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
          position: "relative", //kolon içerisinde hizlama yapmak için 
          width: "100%",
          zIndex: "10", //üstünde olsun resmin 
        }}
      >
        <Row
          className="align-items-center position-absolute" style={{paddingLeft: padding,
    paddingRight: padding, width:"100%"}}
        >
          <Col span={6}>
            <Logo />
          </Col>

          <Col span={18}>
          <Flex  justify="flex-end">  {/* en sona flex atıyorum*/}
          <Space wrap>
              <Select
                defaultValue={itemsWithIcon[0]}
                style={{
                  width: selectBoxWidth,
                }}
                options={items}
              />
            </Space>

            <Button
              type="primary"
              style={{
                backgroundColor: "#E50914",
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            > Oturum Aç 
            </Button>
          </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePageNavBar;
