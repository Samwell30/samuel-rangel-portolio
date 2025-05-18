import "../BackgroundShapes.css";

const BackgroundShapes = () => {
  return (
    <>
      <div className="bg-circle"></div>
      <div className="bg-circle--two"></div>
      <div className="spark"></div>
      <div className="moon"></div>
      <div id="cross"></div>
      <div id="infinity"></div>
      <svg className="bg-blob" viewBox="0 0 200 200">
        <path
          fill="#38b36d"
          d="M46.3,-61.9C59.4,-52.4,68.9,-39.4,73.5,-24.7C78.2,-10.1,78,6.3,71.4,20.6C64.9,34.9,52,47.2,38.1,55.3C24.2,63.5,9.1,67.6,-5.5,70.1C-20,72.7,-34,73.7,-46.8,67.3C-59.6,60.8,-71.1,47,-74.7,31.6C-78.3,16.1,-73.9,-0.9,-68.4,-17.1C-62.9,-33.3,-56.3,-48.7,-44.9,-59.3C-33.5,-69.9,-16.8,-75.7,-0.4,-75.2C16,-74.7,32.1,-67.4,46.3,-61.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};

export default BackgroundShapes;
