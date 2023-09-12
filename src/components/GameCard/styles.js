import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    elevation: 4,
    margin: 8,
    padding: 16,
  },
  image: {
    marginLeft: '2%',
    width: 110,
    height: 110,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 32,
    lineHeight: 43,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 8,
  },
  buttonContainer: {
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "100%",
    height: 42,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    lineHeight: 27,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;