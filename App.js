import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import { Card } from 'react-native-paper';
 function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
  }
export default function App() {
  return (
   <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://octdata.com' }}  
        renderLoading={this.LoadingIndicatorView}
        startInLoadingState={true}
      />
  );
}









// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {
//   LoginButton,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk-next';

// export default class App extends Component {
//   state = {userInfo: {}};

//   getInfoFromToken = token => {
//     const PROFILE_REQUEST_PARAMS = {
//       fields: {
//         string: 'id, name,  first_name, last_name',
//       },
//     };
//     const profileRequest = new GraphRequest(
//       '/me',
//       {token, parameters: PROFILE_REQUEST_PARAMS},
//       (error, result) => {
//         if (error) {
//           console.log('login info has error: ' + error);
//         } else {
//           this.setState({userInfo: result});
//           console.log('result:', result);
//         }
//       },
//     );
//     new GraphRequestManager().addRequest(profileRequest).start();
//   };

//   render() {
//     return (
//       <View style={{flex: 1, margin: 50}}>
//         <LoginButton
//           onLoginFinished={(error, result) => {
//             if (error) {
//               console.log('login has error: ' + result.error);
//             } else if (result.isCancelled) {
//               console.log('login is cancelled.');
//             } else {
//               AccessToken.getCurrentAccessToken().then(data => {
//                 const accessToken = data.accessToken.toString();
//                 this.getInfoFromToken(accessToken);
//               });
//             }
//           }}
//           onLogoutFinished={() => this.setState({userInfo: {}})}
//         />
//         {this.state.userInfo.name && (
//           <Text style={{fontSize: 16, marginVertical: 16}}>
//             Logged in As {this.state.userInfo.name}
//           </Text>
//         )}
//       </View>
//     );
//   }
// }




// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {
//   LoginButton,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk-next';

// export default class App extends Component {
//   state = {userInfo: {}};

//   getInfoFromToken = token => {
//     const PROFILE_REQUEST_PARAMS = {
//       fields: {
//         string: 'id, name,  first_name, last_name',
//       },
//     };
//     const profileRequest = new GraphRequest(
//       '/me',
//       {token, parameters: PROFILE_REQUEST_PARAMS},
//       (error, result) => {
//         if (error) {
//           console.log('login info has error: ' + error);
//         } else {
//           this.setState({userInfo: result});
//           console.log('result:', result);
//         }
//       },
//     );
//     new GraphRequestManager().addRequest(profileRequest).start();
//   };

//   render() {
//     return (
//       <View style={{flex: 1, margin: 50}}>
//         <LoginButton
//           onLoginFinished={(error, result) => {
//             if (error) {
//               console.log('login has error: ' + result.error);
//             } else if (result.isCancelled) {
//               console.log('login is cancelled.');
//             } else {
//               AccessToken.getCurrentAccessToken().then(data => {
//                 const accessToken = data.accessToken.toString();
//                 this.getInfoFromToken(accessToken);
//               });
//             }
//           }}
//           onLogoutFinished={() => this.setState({userInfo: {}})}
//         />
//         {this.state.userInfo.name && (
//           <Text style={{fontSize: 16, marginVertical: 16}}>
//             Logged in As {this.state.userInfo.name}
//           </Text>
//         )}
//       </View>
//     );
//   }
// }






// import React from 'react';
// import {View} from 'react-native';
// import SignIn from './Screens/SignIn';
// import SignUp from './Screens/SignUp';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const App: () => Node = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//         <View></View>
//     //   <NavigationContainer>
//     //   <Stack.Navigator>
//     //     <Stack.Screen name="signIn" component={SignIn} />
//     //     <Stack.Screen name="signUp" component={SignUp} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>

//   );
// };


// export default App;
