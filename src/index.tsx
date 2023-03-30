import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./store";

import "./index.scss";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
