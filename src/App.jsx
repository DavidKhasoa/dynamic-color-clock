import { format } from "date-fns";
import "./App.css";

export default function App() {
  return (
    <>
      <p>Current Time: {format(new Date(), "HH:mm:ss")}</p>
    </>
  );
}