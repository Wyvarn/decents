import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";

// @ts-ignore
const store = configureStore();

export default function Root() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};
