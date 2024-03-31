const { Paper } = require("@mui/material");

export default function AboutItem(props) {
  return (
    <Paper style={{ borderRadius: "0.585rem" }}>
      <img
        alt="img-item"
        loading="lazy"
        src={props.item}
        draggable="false"
        className="catalog-item__img"
        style={{
          width: "100%",
          borderRadius: "0.375rem",
        }}
      />
    </Paper>
  );
}
