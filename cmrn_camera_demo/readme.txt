yarn add axios
yarn add react-native-image-crop-picker     
npx react-native link react-native-image-crop-picker 
yarn add react-native-permissions
npx react-native link react-native-permissions

https://github.com/zoontek/react-native-permissions

// Android
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.RECORD_AUDIO" />


// iOS
<key>NSCameraUsageDescription</key>
<string>YOUR TEXT</string>