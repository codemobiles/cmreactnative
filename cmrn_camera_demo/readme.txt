yarn add axios
yarn add react-native-image-crop-picker     
npx react-native link react-native-image-crop-picker 
yarn add react-native-permissions
npx react-native link react-native-permissions

https://github.com/zoontek/react-native-permissions


// Fix Error 
node_modules/react-native-image-crop-picker/android/build/intermediates/library_manifest/debug/AndroidManifest.xml:10:5-14:15: AAPT: error: unexpected element <queries> found in <manifest>.
https://github.com/ivpusic/react-native-image-crop-picker/issues/1406

// Android
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.RECORD_AUDIO" />


// iOS
<key>NSCameraUsageDescription</key>
<string>YOUR TEXT</string>

// Backend
yarn add express formidable fs-extra body-parser
