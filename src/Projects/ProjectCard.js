import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, langs, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title || "Project image"} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{langs}</p>
        </div>
      </div>
    </Col>
  );
};
