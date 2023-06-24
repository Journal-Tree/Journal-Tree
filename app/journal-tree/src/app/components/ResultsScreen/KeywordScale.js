
const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  innerContainer1: {
    width: 235,
    height: 67.86,
    left: 14,
    top: 55,
    position: 'absolute',
    background: 'white',
    borderRadius: 30
  },
  innerContainer2: {
    width: 10,
    height: 10,
    left: 150.43,
    top: 85,
    position: 'absolute',
    background: '#69A297',
    borderRadius: 9999
  },
  //... rest of the styles go here
};

const KeywordScale = () => (
  <div style={styles.container}>
    <div style={styles.innerContainer1} />
    <div style={styles.innerContainer2} />
  </div>
);

export default KeywordScale;
