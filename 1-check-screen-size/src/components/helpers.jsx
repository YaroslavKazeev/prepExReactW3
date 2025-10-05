import { PrettyHeader } from "./pretty-defaults.jsx";

const DisplaySize = ({ height, width }) => (
  <PrettyHeader style={{ fontSize: "30px", padding: "10px" }}>
    {width}px / {height}px
  </PrettyHeader>
);

const BigHeadMessage = ({ state }) => {
  if (!state) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
        lineHeight: "1",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "250px" }}>
        {"You are seeing "}
        <PrettyHeader Component="span" style={{ fontSize: "20px" }}>
          {state.name}
        </PrettyHeader>
        {" because your screen size is "}
        <PrettyHeader Component="span" style={{ fontSize: "20px" }}>
          {state.size}!
        </PrettyHeader>
        <br />
        <div style={{ paddingTop: "10px", fontSize: "50px" }}>{state.icon}</div>
      </div>
    </div>
  );
};

export { DisplaySize, BigHeadMessage };
