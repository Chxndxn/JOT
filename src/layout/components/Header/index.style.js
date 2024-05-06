export default {
  rootContainer: {
    boxShadow: "none",
  },
  mainContainer: {
    background: "#242424",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100% vw",
  },
  listContainer: {
    display: "flex",
    "&.MuiList-root": { padding: "0px 0px !important" },
  },
  headerOptionsContainer: {
    cursor: "pointer",
    display: "flex",
    listStyleType: "none",
  },
  listStyle: { marginInline: "8px" },
};
