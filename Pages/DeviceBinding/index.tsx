import React, { useEffect } from "react";
import { View, Text, Alert, Button } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SMS from "expo-sms";

const DeviceBinding = () => {
  const isAvailable = async () => {
    await SMS.isAvailableAsync()
      .then((permission) => {
        console.log(permission === true);
        if (permission) {
          alert("permission done");
          SMS.sendSMSAsync(["8657828994"], "My sample HelloWorld message");
        } else if (!permission) {
          alert("sms not ");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <View>
      <Button title="permission" onPress={() => isAvailable()} />
    </View>
  );
};

export default DeviceBinding;
