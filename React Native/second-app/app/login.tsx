import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    // Validation
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", `Welcome ${email}!`);
      // Navigate to home after successful login
      router.replace("/(tabs)");
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          className="px-6 py-8"
        >
          {/* Header */}
          <View className="flex-1 justify-center">
            <Text className="text-4xl font-bold text-white text-center mb-2">
              Welcome Back
            </Text>
            <Text className="text-base text-slate-400 text-center mb-12">
              Sign in to your account
            </Text>

            {/* Email Input */}
            <View className="mb-6">
              <Text className="text-sm font-semibold text-slate-300 mb-2">
                Email
              </Text>
              <TextInput
                className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 text-base"
                placeholder="you@example.com"
                placeholderTextColor="#94a3b8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                editable={!loading}
              />
            </View>

            {/* Password Input */}
            <View className="mb-8">
              <Text className="text-sm font-semibold text-slate-300 mb-2">
                Password
              </Text>
              <TextInput
                className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 text-base"
                placeholder="Enter your password"
                placeholderTextColor="#94a3b8"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                editable={!loading}
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={loading}
              className={`py-3 rounded-lg ${
                loading
                  ? "bg-sky-600 opacity-70"
                  : "bg-sky-500 active:bg-sky-600"
              }`}
            >
              <Text className="text-white font-bold text-center text-lg">
                {loading ? "Signing in..." : "Sign In"}
              </Text>
            </TouchableOpacity>

            {/* Forgot Password Link */}
            <TouchableOpacity className="mt-4">
              <Text className="text-sky-400 text-center text-sm font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View className="flex-row justify-center mt-8">
              <Text className="text-slate-400 text-sm">
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/signup")}>
                <Text className="text-sky-400 text-sm font-bold">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
