- npx react-native init  cmrn_jsonfeed_demo
- npx react-native run-android

# Lib: Basic UI Component 3rd-party
# ------------------------------------
yarn add react-native-elements react-native-vector-icons
npx react-native link react-native-elements
npx react-native link react-native-vector-icons

# Lib: React Navigation
# ------------------------------------
yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npx react-native link react-native-gesture-handler
npx react-native link react-native-reanimated
npx react-native link react-native-screens
npx react-native link react-native-safe-area-context
npx react-native link @react-native-community/masked-view      

# Lib : Http client
# ------------------------------------
yarn add axios
