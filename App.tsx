import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, ViewStyle, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PersonalInfo from "./components/PersonalInfo";
import Chat from "./components/Chat";
import AppLoading from "expo-app-loading";
import { Provider as ThemeProvider, useTheme } from 'react-native-paper';
import { darkTheme } from './themes/darkTheme';

const useStyles = (
  theme: ReactNativePaper.Theme,
): StyleSheet.NamedStyles<{
  container: ViewStyle;
}> =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    }
  });

const App: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const storageUserNameKey = "chat-username";
  const storageImageKey = "chat-image";
  const [username, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [isReady, setIsReady] = useState(false);

  const fetchPersonalData = async () => {
    // let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey);
    // let userName = fetchedUsername == null ? "" : fetchedUsername;
    // let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    // let image = fetchedImage == null ? "" : fetchedImage;
    // setUserName(userName);
    // setImage(image);
  };

  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUserName(name);
    await AsyncStorage.setItem(storageUserNameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchPersonalData}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  let activeComponent =
    username != "" ? (
      <Chat username={username} image={image} />
    ) : (
        <PersonalInfo onClosed={onPersonalInfoClosed} />
      );

  return (
    <ThemeProvider theme={darkTheme}>
      <SafeAreaView style={styles.container}>
        {activeComponent}
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

