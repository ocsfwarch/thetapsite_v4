import "./StickyHeader.css";
interface Props {
  id: string;
  title: string;
}

const StickyHeader = ({ id, title }: Props) => {
  return (
    <div className="sticky" id={id}>
      {title}
    </div>
  );
};

export default StickyHeader;
