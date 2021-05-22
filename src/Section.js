import "./Section.css";

function Section({Icon, title, color, selected}) {
  return <div className={`section ${selected && "section--selected"}`}
  style={{
    borderBottom: `3px solid ${color}`,
    color: 
  }}></div>;
}

export default Section;
