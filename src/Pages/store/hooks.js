import Context from "./Context/Context";
import { useContext } from "react";

export const UseStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
