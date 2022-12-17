import { store } from "./store/store";
import { Provider } from "react-redux";
import Navigation from "./navigations/Navigation";

import { LogBox } from "react-native";

export default function App() {
  // Async Storage warning code
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);

  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}
