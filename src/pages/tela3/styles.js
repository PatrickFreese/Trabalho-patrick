import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "8%",
  },
  card: {
    width:"80%",
    backgroundColor: "blue",
    borderRadius: 15,
    elevation: 4,
    margin: 8,
    padding: 16,
  },
  image: {
    marginTop: 70,
    marginLeft: '2%',
    width: 110,
    height: 110,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titulos: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 18,
    textAlign: "justify",
    paddingTop: "10%",
  },
  dadosUser: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 21,
    fontWeight: "bold",
    textAlign: "justify",
    paddingBottom: 8,
  },

  buttonContainer: {
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: '8%', 
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