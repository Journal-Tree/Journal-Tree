const styles = {
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "inline-flex",
  },
  innerContainer: {
    width: 348,
    height: 83,
    background: "rgba(132, 181, 159, 0.62)",
    boxShadow: "0px 5px 14px rgba(8.24, 15.25, 52.06, 0.04)",
    borderRadius: 20,
    borderLeft: "0.50px #EFF0F6 solid",
    borderTop: "0.50px #EFF0F6 solid",
    borderRight: "0.50px #EFF0F6 solid",
    borderBottom: "0.50px #EFF0F6 solid",
  },
};

const Moody = () => (
  <div style={styles.container}>
    <div style={styles.innerContainer} />
  </div>
);

export default Moody;
