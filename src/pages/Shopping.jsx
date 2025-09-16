import roomsvg from "/roomtype/1.png";

function Shopping() {
  return (
    <div className="flex">
      <div className="relative inline-block">
        <img src={roomsvg} />
        <div className="absolute inset-0 flex items-start justify-start pt-[87px] pl-[146px]">
          <p className="text-sm" style={{ color: "#38470B" }}>
            查看其他房型
          </p>
        </div>
      </div>

      <div>
        <h2>1人・ 單人床・ 附早餐・衛浴1間・18平方公尺</h2>
        <span>
          平日（一～四）價格：1380 / 假日（五〜日）價格：1500
          入住時間：15：00（最早）/ 21：00（最晚） 退房時間：10：00
        </span>
        <p>
          ・單人間僅供一位客人使用。 ・臥室配有單人床和私人浴室。
          ・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。
          ・房間裡有AC，當然還有WiFi。
        </p>
      </div>
    </div>
  );
}

export default Shopping;
