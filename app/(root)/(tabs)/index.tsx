import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-20 font-rubik">
        Welcome to ReState
      </Text>
      <Link href="/sign-in"> Sign in</Link>
      <Link href="/explore"> Explore</Link>
      <Link href="/profile"> Profile</Link>
      <Link href="/properties/1"> Property</Link>
    </View>
  );
}
