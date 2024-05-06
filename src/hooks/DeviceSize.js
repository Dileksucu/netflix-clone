import { useEffect, useState } from "react";
import DeviceType from "../enums/DeviceType";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

// Sayfa büyüklüğüne göre cihaz tipini dinamik olarak algılamaya yarar
const useDevice = () => {
  const [width] = useWindowSize();

  let deviceType = DeviceType.Desktop; //Varsayılan olarak masaüstü olarak ayarla

  if (width <= 640) {
    deviceType = DeviceType.Mobile;
  } else if (width > 640 && width <= 1007) {
    deviceType = DeviceType.Tablet;
  }

  return deviceType;
}

export {
  useWindowSize,
  useDevice
}