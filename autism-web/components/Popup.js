import Link from "next/link";
export default props => {
  const { title, children, nextPage } = props;
  return (
    <div className="popup">
      <strong>{title}</strong>
      {children}
      {nextPage && (
        <Link href={nextPage}>
          <button className="popup__ok">خب</button>
        </Link>
      )}
    </div>
  );
};
