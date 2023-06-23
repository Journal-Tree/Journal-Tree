
const styles = {
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "inline-flex",
  },
  text: {
    width: 266,
    height: 149,
    textAlign: "center",
    color: "#444343",
    fontSize: 20,
    fontFamily: "Inter",
    fontWeight: "400",
    wordWrap: "break-word",
  },
};

const PromptQuestion = () => (
  <div style={styles.container}>
    <div style={styles.text}>
      Can you share with me what the highlight of your day was so far?
    </div>
  </div>
);

export default PromptQuestion;
