import wifi from "/icon/wifi.svg";
import pets from "/icon/pets.svg";
import air_shaft from "/icon/air-shaft.svg";
import breakfast from "/icon/breakfast.svg";
import refrigerator from "/icon/refrigerator.svg";
import phone from "/icon/phone.svg";
import no_smoke from "/icon/no-smoke.svg";
import arrow_next from "/icon/arrow-next.svg";

export const roomData = [
  {
    name: "Single Room",
    price: 1380,
    description:
      "1人・ 單人床・附早餐・ 衛浴1間・18平方公尺 平日（一～四）價格：1380 / 假日（五〜日）價格：1500",
    image: [breakfast, wifi, phone, refrigerator, pets, no_smoke, air_shaft],
  },
];

export const defaultRoomInfo = {
  roomInfo: [
    "・入住時間：最早15：00，最晚21：00；退房時間：10：00，請自行確認行程安排。",
    "・平日定義週一至週四；假日定義週五至週日及國定假日。 ・好室旅店全面禁止吸菸。 ",
    "・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。",
  ],
  reserveFlow: [
    {
      id: 1,
      img: "/image/room-1.png",
      content: "送出線上預約單",
    },
    {
      id: 2,
      img: "/image/room-2.png",
      content:
        "系統立即回覆是否預訂成功 並以簡訊發送訂房通知 (若未收到簡訊請來電確認)",
    },
    {
      id: 3,
      img: "/image/room-3.png",
      content:
        "入住當日憑訂房通知 以現金或刷卡付款即可 (僅接受VISA.JCB.銀聯卡)",
    },
  ],
  arrowImg: arrow_next,
};
