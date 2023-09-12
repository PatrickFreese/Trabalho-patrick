import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: "8%",
      paddingHorizontal: "6%",
    },
  content: {
    flex: 1,
    width: "100%",
    paddingBottom: 24,
    alignItems: "center",
  },
  flatList: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    paddingBottom: 4,
    textTransform: "uppercase",
    marginVertical: 24,
    color: "#FFF",
    marginRight: "auto",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 48,
    borderRadius: 4,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 36,
  },
  modalButton: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 4,
  },
});

export default styles;