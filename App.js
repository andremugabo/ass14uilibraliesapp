import React from "react";
import { View } from "react-native";
import {
  Button,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";

const MyCustomUI = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Username"
          mode="outlined"
          style={styles.input}
          theme={{
            colors: {
              primary: "#F44336",
              placeholder: "#757575",
            },
          }}
        />

        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          theme={{
            colors: {
              primary: "#F44336",
              placeholder: "#757575",
            },
          }}
        />

        <Button
          mode="contained"
          onPress={() => console.log("Button pressed")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          color="#F44336"
        >
          Submit
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    marginBottom: 16,
    width: "100%",
  },
  button: {
    width: "100%",
    marginTop: 16,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
};

export default MyCustomUI;
