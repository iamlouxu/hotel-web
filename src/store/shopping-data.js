import breakfast from "/icon/breakfast.svg";
import bar from "/icon/poolside-bar.svg";
import service from "/icon/room-service.svg";
import wifi from "/icon/wifi.svg";
import child from "/icon/fit-child.svg";
import phone from "/icon/phone.svg";
import views from "/icon/good-views.svg";
import refrigerator from "/icon/refrigerator.svg";
import sofa from "/icon/sofa.svg";
import pets from "/icon/pets.svg";
import smoke from "/icon/no-smoke.svg";
import airConditioner from "/icon/air-shaft.svg";
import cancel from "/icon/cancelA.svg";
import ok from "/icon/okA.svg";

export const obj = {
  name: "Single Room",
  subTitle: "1人・ 單人床・ 附早餐・衛浴1間・18平方公尺",
  roomInfo: [
    "平日（一～四）價格：1380 / 假日（五〜日）價格：1500",
    "入住時間：15：00（最早）/ 21：00（最晚)",
    "退房時間：10：00",
  ],
  description: [
    "單人間僅供一位客人使用。 ",
    "臥室配有單人床和私人浴室。",
    "您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。",
    "房間裡有AC，當然還有WiFi。",
  ],
  icon: [
    { name: "早餐", imgUrl: breakfast, smallImgUrl: ok },
    { name: "Mini Bar", imgUrl: bar, smallImgUrl: cancel },
    { name: "Room Service", imgUrl: service, smallImgUrl: cancel },
    { name: "Wifi", imgUrl: wifi, smallImgUrl: ok },
    { name: "適合兒童", imgUrl: child, smallImgUrl: cancel },
    { name: "電話", imgUrl: phone, smallImgUrl: ok },
    { name: "漂亮的視野", imgUrl: views, smallImgUrl: cancel },
    { name: "冰箱", imgUrl: refrigerator, smallImgUrl: ok },
    { name: "沙發", imgUrl: sofa, smallImgUrl: cancel },
    { name: "攜帶寵物", imgUrl: pets, smallImgUrl: ok },
    { name: "全面禁菸", imgUrl: smoke, smallImgUrl: ok },
    { name: "空調", imgUrl: airConditioner, smallImgUrl: ok },
  ],
};
