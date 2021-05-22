import "./Section.css";

function Section({Icon, title, color, selected}) {
  return <div className={`section ${selected && "section--selected"}`}></div>;
}

export default Section;
