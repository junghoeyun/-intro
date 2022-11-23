import { createRoot } from "react-dom/client";
import "./css/style.css";
import App from "./App";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
      ></div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Overlay />
  </>
);
