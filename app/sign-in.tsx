import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";

const signin = () => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
