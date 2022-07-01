const Numbers = () => {
  return (
    <div>
      <button
        className="number"
        onClick={(e) => {
          alert("you pressed one, and it works");
        }}
      >
        1
      </button>
      <button className="number">2</button>
      <button className="number">3</button>
    </div>
  );
};
