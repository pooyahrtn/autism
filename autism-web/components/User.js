import Popup from "./Popup";
export default props => {
  const {
    name,
    age,
    onSubmit,
    onNameChange,
    onAgeChange,
    hasAutism,
    setHasAutism,
    hasBackground,
    setHasBackground,
  } = props;
  const setValue = output => e => output(e.target.value === "true");
  
  return (
    <Popup title="مشخصات">
      <form onSubmit={onSubmit} className="form">
        <label className="form__label">
          نام
          <input
            className="form__textinput"
            type="text"
            value={name}
            onChange={event => onNameChange(event.target.value)}
            placeholder="نام را وارد کنید"
          />
        </label>
        <label className="form__label">
          سن
          <input
            className="form__textinput"
            type="text"
            pattern="[0-9]*"
            value={age}
            onChange={event => onAgeChange(event.target.value)}
            placeholder="سن را وارد کنید"
            min="1"
            max="100"
          />
        </label>
        <label className="form__radio">
          آیا کودک شما مبتلا به اتیسم تشخیص داده شده است؟
          <span className="form__radio_container">
            <span className="form__radio_item">
              <input
                onChange={setValue(setHasAutism)}
                value={true}
                className="form__radio_item_text"
                type="radio"
                name="hasAutism"
                checked={hasAutism}
              />
              بله
            </span>
            <span className="form__radio_item">
              <input
                onChange={setValue(setHasAutism)}
                value={false}
                className="form__radio_item_text"
                defaultChecked={!hasAutism}
                name="hasAutism"
                type="radio"
              />
              خیر
            </span>
          </span>
        </label>
        <label className="form__radio">
          آیا سابقه‌ی بیماری اتیسم در خانواده‌ی شما وجود دارد؟
          <span className="form__radio_container">
            <span className="form__radio_item">
              <input
                value={true}
                onChange={setValue(setHasBackground)}
                className="form__radio_item_text"
                type="radio"
                checked={hasBackground}
              />
              بله
            </span>
            <span className="form__radio_item">
              <input
                value={false}
                onChange={setValue(setHasBackground)}
                className="form__radio_item_text"
                type="radio"
                checked={!hasBackground}
              />
              خیر
            </span>
          </span>
        </label>
      </form>
      <button className="popup__ok" onClick={onSubmit}>
        خب
      </button>
    </Popup>
  );
};
