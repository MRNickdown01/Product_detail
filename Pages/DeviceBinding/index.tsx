import React, { useEffect } from "react";
import { View, Text, Alert, Button } from "react-native";
import SendSMS from "react-native-sms";
import { AndroidSuccessTypes } from "react-native-sms";
import * as LocalAuthentication from "expo-local-authentication";
const DeviceBinding = () => {
  const send = async () => {
    try {
      await SendSMS.send(
        {
          body: "The default body of the SMS!",
          recipients: ["8657828994", "9987996746"],
          successTypes: [AndroidSuccessTypes.all],
          allowAndroidSendWithoutReadPermission: true,
        },
        (completed, cancelled, error) => {
          console.log(
            "SMS Callback: completed: " +
              completed +
              " cancelled: " +
              cancelled +
              "error: " +
              error
          );
        }
      );
    } catch (error) {
      console.log("error ending" + error);
      alert("heelo");
    }
  };

  useEffect(() => {
    send();
  }, []);

  return (
    <View>
      <Text>heelo</Text>
    </View>
  );
};

export default DeviceBinding;
