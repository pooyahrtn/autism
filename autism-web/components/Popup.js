export default props => {
    const {
        onClick,
        title,
        children,
    } = props;
    return (
        <div className="popup">
            <strong>{title}</strong>
            {children}
            {
                onClick && (
                    <button className="popup__ok" onClick={onClick}>
                        خب
                    </button>
                )
            }
        </div>
    );
}