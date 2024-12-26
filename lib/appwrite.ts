import {
  Avatars,
  Client,
  Account,
  OAuthProvider,
  ID,
} from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.restate.mar",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};
if (!config) throw new Error("Create OAuth2 token failed 1");

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    console.log("Redirect URI:", redirectUri);

    if (!response) throw new Error("Create OAuth2 token failed 1");
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );

    console.log("Browser result:", browserResult);
    if (browserResult.type === "dismiss") {
      console.error("User dismissed the OAuth session or redirection failed.");
    }

    if (browserResult.type !== "success") throw new Error("Failed to login 2");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Create OAuth2 token failed 3");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session 4");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatar.getInitials(response.name);
      return {
        ...response,
        avatar: userAvatar.toString(),
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
