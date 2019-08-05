// import css from "./OrientationWarning.scss"

const OrientationWarning = props => {
    const {
        onClick
    } = props;
    return (
        <div className="popup hidden_on_landscape">
            <strong>برای عملکرد بهتر، لطفا دستگاه خود را افقی کنید.</strong>
            <button className="popup__ok" onClick={onClick}>
                خب
            </button>
        </div>
    );
}

export default OrientationWarning;