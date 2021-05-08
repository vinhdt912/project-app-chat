import * as React from "react";
import { Provider } from "react-redux";
import store from "./src/containers/redux/store";
import Providers from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}
