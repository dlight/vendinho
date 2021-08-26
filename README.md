Not a lot of stuff here

The `./run-emu` scripts run the emulator, but you need to setup it here:
[Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

You need to setup one with 5.4 inches screen and API level 29, but just
because I hardcoded this in the script. If you setup another emulator, you
need to change the script. You can run

```bash
/opt/android-sdk/emulator/emulator -list-avds
```

To list all available emulators.
