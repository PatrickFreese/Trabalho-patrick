import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
  },
  imagem: {
    width: 365,
    height: 365,
    flexShrink: 0,
  },
  texto2: {
    width: 274,
    color: 'rgba(255, 255, 255, 0.70)',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
  },
  
  texto: {
    width: 296,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 42,
    letterSpacing: -0.56,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
  },

  button: {
    width: "100%",
    height: 57,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
