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

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    // Validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (name.trim().length < 2) {
      Alert.alert("Error", "Name must be at least 2 characters");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    // Simulate signup delay
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", `Welcome ${name}! Your account has been created.`);
      // Navigate to home after successful signup
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
              Create Account
            </Text>
            <Text className="text-base text-slate-400 text-center mb-12">
              Sign up to get started
            </Text>

            {/* Name Input */}
            <View className="mb-6">
              <Text className="text-sm font-semibold text-slate-300 mb-2">
                Full Name
              </Text>
              <TextInput
                className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 text-base"
                placeholder="John Doe"
                placeholderTextColor="#94a3b8"
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
                editable={!loading}
              />
            </View>

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
                placeholder="At least 6 characters"
                placeholderTextColor="#94a3b8"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                editable={!loading}
              />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              onPress={handleSignUp}
              disabled={loading}
              className={`py-3 rounded-lg ${
                loading
                  ? "bg-green-600 opacity-70"
                  : "bg-green-500 active:bg-green-600"
              }`}
            >
              <Text className="text-white font-bold text-center text-lg">
                {loading ? "Creating Account..." : "Sign Up"}
              </Text>
            </TouchableOpacity>

            {/* Terms Link */}
            <Text className="text-slate-400 text-xs text-center mt-4">
              By signing up, you agree to our{" "}
              <Text className="text-sky-400 font-semibold">
                Terms of Service
              </Text>
            </Text>

            {/* Sign In Link */}
            <View className="flex-row justify-center mt-8">
              <Text className="text-slate-400 text-sm">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text className="text-sky-400 text-sm font-bold">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
