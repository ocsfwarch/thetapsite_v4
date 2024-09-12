import "./StickyHeader.css";
interface Props {
  id: string;
  title: string;
}

const StickyHeader = ({ id, title }: Props) => {
  return (
    <div className="sticky" id={id} data-testid="sticky-header">
      {title}
    </div>
  );
};

export default StickyHeader;
