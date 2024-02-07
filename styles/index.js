import { SIZES, MAIN_COLORS } from "../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 0,
    backgroundColor: MAIN_COLORS.container_background,

  },
  toolbar_bottom_icon: {
    width: SIZES.toolbar_icon,
    height: SIZES.toolbar_icon
  },
  search_icon: {
    width: SIZES.search_icon,
    height: SIZES.search_icon
  },
  tab_navi_bottom: {
    activeColor: MAIN_COLORS.header_tab_forecolor,
    inactiveColor: "#98FF6F",
    backgroundColor: MAIN_COLORS.header_tab_background,
  },

  appHeader: {
    flex: 1,
    backgroundColor: MAIN_COLORS.header_tab_background,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: "flex-start",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  appHeaderText: {
    fontSize: 18,
    textAlign: "center",
    padding: 8,
    color: MAIN_COLORS.header_tab_forecolor,
    backgroundColor: MAIN_COLORS.header_tab_background,
  },


});

export default styles;