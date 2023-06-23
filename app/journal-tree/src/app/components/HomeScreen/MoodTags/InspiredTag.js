const containerStyles = {
  width: 341,
  height: 87,
  justifyContent: "center",
  alignItems: "center",
  display: "inline-flex",
};

const innerContainerStyles = {
  width: 341,
  height: 87,
  position: "relative",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  display: "flex",
};

const tagStyles = {
  width: 341,
  height: 87,
  background: "#C4DDDB",
  boxShadow: "0px 5px 14px rgba(8, 15, 52, 0.04)",
  borderRadius: 20,
  border: "0.50px solid #EFF0F6",
};

const smallBoxStyles = {
  width: 20.13,
  height: 14.12,
};

const InspiredTag = () => (
  <div style={containerStyles}>
    <div style={innerContainerStyles}>
      <div style={tagStyles} />
      <div style={smallBoxStyles} />
    </div>
  </div>
);

export default InspiredTag;
