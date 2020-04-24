# React Native Basics - My Journey of React Native
This project shows the basics of [React Native](https://reactnative.dev/), a framework that lets us create applications which can run across multiple platforms. To learn more about what React Native is, why its useful, and more you can checkout [this link](https://todo.update.this.com).

I created this project to learn the basics of react native and I will be describing each and every steps of what I learned as I learn new things. I have been working on ReactJS for about a year now but this is my very first react native project.


## About the application
    
    In this application, I will be creating a simple todo application. 


## Setting up the environmet
1. Install Node

## [Expo](https://expo.io/learn)
To install expo, we will use the command below. `-g` is used to specify that the module installed is a global modue. This allows us to ues `expo` from terminal/command prompt as a command.
```bash
npm i -g expo
```

Once the installation completes we can verify that the library is installed properly by using the command `expo -V` or `expo --version`.

```
C:\Users\Gamer>expo --version
3.18.6
```

To understand more about what expo command does and what we can do with that command, we can go to command prompt/terminal and type the command `expo`. This gives the nice documentation of each options and what they do.


```
C:\Users\Gamer>expo

  Usage: expo [options] [command]

  Options:

    -V, --version                                       output the version number
    --non-interactive                                   Fail, if an interactive prompt would be required to continue. Enabled by default if stdin is not a TTY.
    -h, --help                                          output usage information

  Commands:

    android [options] [project-dir]                     Opens your app in Expo on a connected Android device
    build:ios|bi [options] [project-dir]                Build a standalone IPA for your project, signed and ready for submission to the Apple App Store.
    build:android|ba [options] [project-dir]            Build a standalone APK or App Bundle for your project, signed and ready for submission to the Google Play Store.
    build:web [options] [project-dir]                   Build a production bundle for your project, compressed and ready for deployment.
    build:status|bs [options] [project-dir]             Gets the status of a current (or most recently finished) build for your project.
    bundle-assets [options] [project-dir]               Bundles assets for a detached app. This command should be executed from xcode or gradle.
    client:ios [options] [project-dir]                  Build a custom version of the Expo client for iOS using your own Apple credentials and install it on your mobile device using Safari.
    client:install:ios                                  Install the Expo client for iOS on the simulator
    client:install:android                              Install the Expo client for Android on a connected device or emulator
    credentials:manager [options]                       Manage your credentials
    customize:web [options] [project-dir]               Generate static web files into your project.
    diagnostics [project-dir]                           Prints environment info to console.
    doctor [options] [project-dir]                      Diagnoses issues with your Expo project.
    eject [options] [project-dir]                       Creates Xcode and Android Studio projects for your app. Use this if you need to add custom native functionality.
    export [options] [project-dir]                      Exports the static files of the app for hosting it on a web server.
    fetch:ios:certs [options] [project-dir]             Fetch this project's iOS certificates/keys and provisioning profile. Writes files to the PROJECT_DIR and prints passwords to stdout.
    fetch:android:keystore [options] [project-dir]      Fetch this project's Android keystore. Writes keystore to PROJECT_DIR/PROJECT_NAME.jks and prints passwords to stdout.
    fetch:android:hashes [options] [project-dir]        Fetch this project's Android key hashes needed to set up Google/Facebook authentication. Note: if you are using Google Play signing, this app will be signed with a different key after publishing to the store, and you'll need to use the hashes displayed in the Google Play console.
    fetch:android:upload-cert [options] [project-dir]   Fetch this project's upload certificate needed after opting in to app signing by Google Play or after resetting a previous upload certificate.
    generate-module [options] [new-module-project]      Generate a universal module for Expo from a template in [new-module-project] directory.
    init|i [options] [project-dir]                      Initializes a directory with an example project. Run it without any options and you will be prompted for the name and type.
    install|add [options] [packages...]                 Installs a unimodule or other package to a project.
    ios [options] [project-dir]                         Opens your app in Expo in an iOS simulator on your computer
    login|signin [options]                              Login with your Expo account
    logout                                              Logout from your Expo account
    opt-in-google-play-signing [options] [project-dir]  Switch from the old method of signing APKs to the new App Signing by Google Play. The APK will be signed with an upload key and after uploading it to the store, app will be re-signed with the key from the original keystore.
    optimize|o [options] [project-dir]                  Compress the assets in your Expo project
    prepare-detached-build [options] [project-dir]      Prepares a detached project for building
    publish:history|ph [options] [project-dir]          View a log of your published releases.
    publish:details|pd [options] [project-dir]          View the details of a published release.
    publish:set|ps [options] [project-dir]              Set a published release to be served from a specified channel.
    publish:rollback|pr [options] [project-dir]         Rollback an update to a channel.
    publish|p [options] [project-dir]                   Publishes your project to exp.host
    push:android:upload [options] [project-dir]         Uploads a Firebase Cloud Messaging key for Android push notifications.
    push:android:show [options] [project-dir]           Print the value currently in use for FCM notifications for this project.
    push:android:clear [options] [project-dir]          Deletes a previously uploaded FCM credential.
    push:web:upload [options] [project-dir]             Uploads VAPID key pair and VAPID subject for web push notifications.
    push:web:generate [options] [project-dir]           Generates VAPID key pair for web push notifications.
    push:web:show [options] [project-dir]               Prints the VAPID public key, the VAPID private key, and the VAPID subject currently in use for web notifications for this project.
    push:web:clear [options] [project-dir]              Deletes previously uploaded VAPID public key, VAPID private key, and VAPID subject.
    register                                            Sign up for a new Expo account
    send [options] [project-dir]                        Sends a link to your project to an email address
    start|r [options] [project-dir]                     Starts or restarts a local server for your app and gives you a URL to it
    start:web|web [options] [project-dir]               Starts the Webpack dev server for web projects
    upgrade|update [options] [targetSdkVersion]         Upgrades your project dependencies and app.json and to the given SDK version
    upload:android|ua [options] [projectDir]            Uploads a standalone Android app to Google Play (works on macOS only). Uploads the latest build by default.
    upload:ios|ui [options] [projectDir]                Uploads a standalone app to Apple TestFlight (works on macOS only). Uploads the latest build by default.
    url|u [options] [project-dir]                       Displays the URL you can use to view your project in Expo
    url:ipa [options] [project-dir]                     Displays the standalone iOS binary URL you can use to download your app binary
    url:apk [options] [project-dir]                     Displays the standalone Android binary URL you can use to download your app binary
    webhooks:set [options] [project-dir]                Set a webhook for the project.
    webhooks:show [options] [project-dir]               Show webhooks for the project.
    webhooks:clear [options] [project-dir]              Clear a webhook associated with this project.
    whoami|w                                            Checks with the server and then says who you are logged in as

To learn more about a specific command and its options use 'expo [command] --help'
```

As we see above in the last line, to learn more about the specific option, we can use the command `expo [command] --help`. For example, if we want to learn more about `expo init` and options that are available to us we can do:

```

C:\Users\Gamer>expo init --help

  Usage: init|i [options] [project-dir]

  Initializes a directory with an example project. Run it without any options and you will be prompted for the name and type.

  Options:

    -t, --template [name]  Specify which template to use. Valid options are "blank", "tabs", "bare-minimum" or a package on npm (e.g. "expo-template-bare-typescript") that includes an Expo project template.
    --npm                  Use npm to install dependencies. (default when Yarn is not installed)
    --yarn                 Use Yarn to install dependencies. (default when Yarn is installed)
    --name [name]          The name of your app visible on the home screen.
    --yes                  Use default options. Same as "expo init --template blank"
    -h, --help             output usage information
```

### expo init

As the `expo` command above shows, `init` option can be used when we need to create a brand new React Native project. It creates a directory and some files inside of with some boiler plate code. 

I will be using the command below to create a brand new project with `blank` template. I am also using `yarn` as my package manager. And I am naming my project as `react-native-basic-app`

```
expo init --template blank --name react-native-basic-app --yarn
```

Once the expo init command completes, I saw a directory named `react-native-basic-app`. If I do `cd react-native-basic-app` and do `ls` I see that `expo init` command created below files and directories.

```
04/23/2020  10:02 PM    <DIR>          .expo-shared
10/26/1985  03:15 AM               130 .gitignore
10/26/1985  03:15 AM               403 App.js
04/23/2020  10:02 PM               514 app.json
04/23/2020  10:02 PM    <DIR>          assets
10/26/1985  03:15 AM               107 babel.config.js
04/23/2020  10:04 PM    <DIR>          node_modules
04/23/2020  10:02 PM               550 package.json
04/23/2020  10:04 PM           252,312 yarn.lock
```

The firs thing that we need to do.

