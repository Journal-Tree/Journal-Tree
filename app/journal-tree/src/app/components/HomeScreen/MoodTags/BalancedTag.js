
const styles = {
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  innerContainer: {
    width: 341,
    height: 83,
    left: 0,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "inline-flex",
  },
  flexContainer: {
    width: 341,
    height: 83,
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
  },
  tagBackground: {
    width: 341,
    height: 83,
    background: "#69A297",
    boxShadow: "0px 5px 14px rgba(8.24, 15.25, 52.06, 0.04)",
    borderRadius: 20,
    borderLeft: "0.50px #EFF0F6 solid",
    borderTop: "0.50px #EFF0F6 solid",
    borderRight: "0.50px #EFF0F6 solid",
    borderBottom: "0.50px #EFF0F6 solid",
  },
  tagText: {
    left: 96,
    top: 31,
    position: "absolute",
    textAlign: "center",
    color: "#FFFBFB",
    fontSize: 30,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 20,
    wordWrap: "break-word",
  },
};

const BalancedTag = () => (
  <div style={styles.container}>
    <div style={styles.innerContainer}>
        <div style={styles.flexContainer}>
            <div style={styles.tagBackground} />
        </div>
    </div>
    <div style={styles.tagText}>#Balanced</div>
  </div>
);

export default BalancedTag;
