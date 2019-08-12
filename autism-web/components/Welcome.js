import Popup from "./Popup";

export default props => {
  return (
    <Popup title="هدف ما" {...props}>
      <p className="popup__description">
        هدف این سیستم ارائه ی روشی برای ارزیابی تشخیص هیجانات صوت در افراد است،
        تا با استفاده از نتایج، ویژگی های مشترک بین آنها پیدا کنیم و راهکاری
        برای غربالگری مشکل تشخیص هیجانات در صوت بدست آوریم.
      </p>
    </Popup>
  );
};
