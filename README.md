# Install Instructions
1. First read react-native gettting started.  Recommend installing Native IDEs first
2. Install react-native-cli
3. git clone repository
4. run the following command in the Android/app directory
   - keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
   - https://stackoverflow.com/questions/57104357/react-native-task-appvalidatesigningdebug-failed
5. npm install
6. react-native start
7. react-native [run-android || run-ios]