import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
