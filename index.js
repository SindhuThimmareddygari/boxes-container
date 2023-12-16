const Box = (props) => {
  const { boxclass, boxtext } = props;
  return (
    <div className={boxclass}>
      <p className="box-text">{boxtext}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxclass="small" boxtext="small" />
      <Box boxclass="medium" boxtext="medium" />
      <Box boxclass="large" boxtext="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
