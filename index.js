/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/Root';
import {name as appName} from './app.json';
import '@utils/shims';

// YellowBox.ignoreWarnings([
//     'Warning: componentWillMount',
//     'Warning: componentWillReceiveProps',
//     'Module RCTImageLoader',
//     'Class RCTCxxModule was not exported',
//     'Remote debugger'
// ]);

AppRegistry.registerComponent(appName, () => App);
