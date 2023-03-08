import { AppRoutes } from "../routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components";

export const Routes = () => {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.LIGHT.COLORS.SECONDARY, flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};