import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import colors from "@colors";

export const INITIAL_ROUTE = "WalletsOverview";

const StackNavigator = createStackNavigator();

const parentGetStateForAction = StackNavigator.router.getStateForAction;

StackNavigator.router.getStateForAction = (action, inputState) => {
    const state = parentGetStateForAction(action, inputState);

    // fix it up if applicable
    if (state && action.type === NavigationActions.NAVIGATE) {
        if (action.params && action.params.replaceRoute) {
            const leave = action.params.leave || 1;
            delete action.params.replaceRoute;
            while (state.routes.length > leave && state.index > 0) {
                const oldIndex = state.index - 1;
                // remove one that we are replacing
                state.routes.splice(oldIndex, 1);
                // index now one less
                state.index = oldIndex;
            }
        }
    }

    return state;
};

const ApplicationRouter = () => {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName={INITIAL_ROUTE} screenOptions={{
                headerTintColor: colors.secondary,
                // tintColor: colors.secondary,
                headerStyle: {
                    backgroundColor: colors.primary
                }
            }}>
                <StackNavigator.Screen name="ChangeCurrency" component={{}}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
};



export default ApplicationRouter;