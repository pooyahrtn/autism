import Popup from './Popup';

export default props => {
    return (
        <Popup {...props}>
            <p className="popup__description">
                در ادامه، در هر مرحله ۲ تصویر و یک صدا پخش خواهد شد، و باید تصویر متناسب با عکس انتخاب شود.
            </p>
        </Popup>
    );
}