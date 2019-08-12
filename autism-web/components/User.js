import Popup from "./Popup";
export default props => {
  const { name, age, onSubmit, onNameChange, onAgeChange } = props;
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
      </form>
      <button className="popup__ok" onClick={onSubmit}>
        خب
      </button>
    </Popup>
  );
};
