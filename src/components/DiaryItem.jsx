import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = () => {
  const emotionId = 2;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        {/* `img_section img_section_${emotionId}` = 동적인 클래스 만들어서 id가 들어왔을 때 css를 해주기 좋다*/}
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
