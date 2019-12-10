import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation'

const UserGuest = props => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Search for your five forks profile!</Text>
      <Text style={styles.description}>
        ¿How do you describe your ideal restaurant? tell us about your
        experience!.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          style={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Watch your profile"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  viewBtn: {
    flex: 1,
    alignItems: "center"
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  }
});

export default withNavigation(UserGuest);
