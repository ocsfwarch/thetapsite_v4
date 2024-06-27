import "./SkillItem.css";

interface Props {
  image: string;
  title: string;
}
const SkillItem = ({ image, title }: Props) => {
  return (
    <div className="skill_container">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default SkillItem;
