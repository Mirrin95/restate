import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const signin = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="flex items-center px-10">
          <Text className="text-3xl font-bold my-10 font-rubik text-black-200">
            Welcome to ReState!
          </Text>
          <Text className="text-3xl  mt-2 font-rubik-bold text-black-300 text-center">
            Lets Get You Closer to {"\n"}{" "}
            <Text className="text-primary-300">Your Dream Home</Text>
          </Text>
          <Text className="text-base mt-10 text-black-300 text-center">
            Login to Restate with Google
          </Text>
          <View>
            <TouchableOpacity onPress={handleLogin}>
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={icons.google}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
