const wifi = `${import.meta.env.BASE_URL}icon/wifi.svg`;
const pets = `${import.meta.env.BASE_URL}icon/pets.svg`;
const air_shaft = `${import.meta.env.BASE_URL}icon/air-shaft.svg`;
const breakfast = `${import.meta.env.BASE_URL}icon/breakfast.svg`;
const refrigerator = `${import.meta.env.BASE_URL}icon/refrigerator.svg`;
const phone = `${import.meta.env.BASE_URL}icon/phone.svg`;
const no_smoke = `${import.meta.env.BASE_URL}icon/no-smoke.svg`;
const arrow_next = `${import.meta.env.BASE_URL}icon/arrow-next.svg`;

export const roomData = [
  {
    name: "Single Room",
    price: 1380,
    description: [
      "1人・ 單人床・附早餐・ 衛浴1間・18平方公尺",
      "平日（一～四）價格：1380 / 假日（五〜日）價格：1500",
    ],
    image: [
      { url: breakfast, name: "早餐" },
      { url: wifi, name: "WIFI" },
      { url: phone, name: "電話" },
      { url: refrigerator, name: "冰箱" },
      { url: pets, name: "攜帶寵物" },
      { url: no_smoke, name: "全面禁菸" },
      { url: air_shaft, name: "空調" },
    ],
  },
];

export const defaultRoomInfo = {
  roomInfo: [
    "・入住時間：最早15：00，最晚21：00；退房時間：10：00，請自行確認行程安排。",
    "・平日定義週一至週四；假日定義週五至週日及國定假日。 ",
    "・好室旅店全面禁止吸菸。 ",
    "・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。",
  ],
  reserveFlow: [
    {
      id: 1,
      img: `${import.meta.env.BASE_URL}icon/booking.svg`,
      content: "送出線上預約單",
    },
    {
      id: 2,
      img: `${import.meta.env.BASE_URL}icon/search-chat.svg`,
      content:
        "系統立即回覆是否預訂成功 並以簡訊發送訂房通知 (若未收到簡訊請來電確認)",
    },
    {
      id: 3,
      img: `${import.meta.env.BASE_URL}icon/payment.svg`,
      content:
        "入住當日憑訂房通知 以現金或刷卡付款即可 (僅接受VISA.JCB.銀聯卡)",
    },
  ],
  arrowImg: arrow_next,
};
