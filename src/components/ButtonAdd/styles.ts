import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
  },

  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },

  icon: {
    width: 24,
    height: 18,
  },
  
});

export { styles };