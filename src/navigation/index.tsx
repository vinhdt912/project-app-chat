import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import AuthProvider from "./AuthProvider";
import Routes from "./Routes";

const Providers: React.FC<any> = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5b3a70",
    accent: "#50c878",
  },
};
export default Providers;
