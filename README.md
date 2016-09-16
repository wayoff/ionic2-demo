# ionic2-demo

this is just a demo app on how to use ionic2 / angular2 / typescripe, as well as ionic deploy


to install the app, npm should be the latest or greater than > 3.x

1) on your terminal type `npm install`


2) install the necessary plugin:

  `cordova-plugin-console`
  
  `cordova-plugin-device`
  
  `cordova-plugin-splashscreen`
  
  `cordova-plugin-statusbar`
  
  `cordova-plugin-whitelist`
  
  `ionic-plugin-deploy`
  
  `ionic-plugin-keyboard`
  
  using `ionic plugin add PluginName`
  

3) `ionic serve` to test this on your browser if everything is working, it should open a new tab `(http://localhost:8100/)`

4) add platform using: `ionic platform add ios` or `ionic platform add android`

  4.a) Android (note: this require ant build and android SDK)
  
    4.a.a) use `ionic build android` to compile everything and it should create an APK
          (\app-name\platforms\android\build\outputs\apk)
          
    4.a.b) or you can use `ionic run android` if a device is connected
    
  4.b) ios (note: xcode is needed)
  
    4.b.a) use `ionic build ios` to compile
    
    4.b.b) use `ionic run ios` to run on selected device
    
    
