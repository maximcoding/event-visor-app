## react-native  "0.71.6"

## Dependencies for Android Development
## Download and Install Android Studio 

Select inside Android Studio ANDROID SDK PLATFORM  -> `Android Tiramisu`

## Download and Install Java
`brew tap homebrew/cask-versions`
`brew install --cask zulu11`

## Check Java version
`java -version`
openjdk version "11.0.18" 2023-01-17 LT

## Download manually gradle and put to `/usr/local/bin/gradle`

### Adding Android,Gradle, Java to $PATH

`echo $HOME`
/Users/maxim

`vi $HOME/.zshrc`

`export GRADLE_HOME=/usr/local/bin/gradle5.6.4/bin`
`export ANDROID_HOME=$HOME/Library/Android/sdk`

`echo $ANDROID_HOME`
$HOME/Library/Android/sdk

`export PATH=$PATH:$GRADLE_HOME`
`export PATH=$PATH:$ANDROID_HOME/emulator`
`export PATH=$PATH:$ANDROID_HOME/platform-tools`
`export PATH=$PATH:$ANDROID_HOME/tools`
`export PATH=$PATH:$ANDROID_HOME/tools/bin`
### Check android sdk installed
`adb`
## Restart Terminal

## Validate Installations

`java -version`
openjdk version "11.0.18" 2023-01-17 LTS

`gradle -version`
Gradle 5.6.4

`adb`
/Users/maxim/Library/Android/sdk

## Change in package.json scripts
 
 `"android": "npx react-native run-android"`
 `"ios": "npx react-native run-ios"`

## Change in android/gradle/wrapper/gradle-wrapper.properties

`distributionUrl=https\://services.gradle.org/distributions/gradle-7.5.1-all.zip`