import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  sView: {
    flexShrink: 1,
    flexGrow: 1
  },
  subContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: "blue",
  },
  mb20: {
    marginBottom: 20
  },
  bar: {
    position: "absolute",
    fontSize: 40,
    top: 40,
    left: 20,
    color: "green"
  },
  sliderGroup: {
    marginTop: 10,
    marginBottom: 30
  },
  txtGroup: {
    flexDirection: "row",
    alignItems: "center"
  },
  txt: {
   flex: 1.4,
   fontSize: 14
  },
  valTxt: {
    flex: 1,
    fontSize: 24,
    color: "red",
    textAlign: "right"
  }
});