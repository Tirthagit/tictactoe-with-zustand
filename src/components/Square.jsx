const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          backgroundColor: "#fff",
          border: "1px solid #999",
          outline: 0,
          borderRadius: 0,
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
