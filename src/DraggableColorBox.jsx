export const DraggableColorBox = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
      }}
    >
      {color}
    </div>
  );
};
