export function Addcolor({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "150px",
    marginTop: "10px"
  };
  return (
    <div style={styles}></div>
  );
}
