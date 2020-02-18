import {createStore, compose, applyMiddleware} from "redux";
import {Platform} from "react-native";
import devTools from "remote-redux-devtools";
import {prodMiddleware, devMiddleware} from "./middleware";
import {AppState} from "./rootReducer";


export default function configureStore(initialState: AppState) {
    return createStore(rootReducer, initialState, __DEV__ ?
        compose(
            applyMiddleware(...devMiddleware),
            devTools({
                name: Platform.OS,
                hostname: "localhost",
                port: 5678
            })
        ) :
        compose(applyMiddleware(...prodMiddleware))
    )
}