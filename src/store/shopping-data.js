const breakfast = `${import.meta.env.BASE_URL}icon/breakfast.svg`;
const bar = `${import.meta.env.BASE_URL}icon/poolside-bar.svg`;
const service = `${import.meta.env.BASE_URL}icon/room-service.svg`;
const wifi = `${import.meta.env.BASE_URL}icon/wifi.svg`;
const child = `${import.meta.env.BASE_URL}icon/fit-child.svg`;
const phone = `${import.meta.env.BASE_URL}icon/phone.svg`;
const views = `${import.meta.env.BASE_URL}icon/good-views.svg`;
const refrigerator = `${import.meta.env.BASE_URL}icon/refrigerator.svg`;
const sofa = `${import.meta.env.BASE_URL}icon/sofa.svg`;
const pets = `${import.meta.env.BASE_URL}icon/pets.svg`;
const smoke = `${import.meta.env.BASE_URL}icon/no-smoke.svg`;
const airConditioner = `${import.meta.env.BASE_URL}icon/air-shaft.svg`;
const cancel = `${import.meta.env.BASE_URL}icon/cancelA.svg`;
const ok = `${import.meta.env.BASE_URL}icon/okA.svg`;

const roomtypeA = `${import.meta.env.BASE_URL}roomtype/roomtypeA.png`;
const roomtypeB = `${import.meta.env.BASE_URL}roomtype/roomtypeB.png`;
const roomtypeC = `${import.meta.env.BASE_URL}roomtype/roomtypeC.png`;

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
  roomtype: [
    { id: 1, roomUrl: roomtypeC },
    { id: 2, roomUrl: roomtypeA },
    { id: 3, roomUrl: roomtypeB },
  ],
};
