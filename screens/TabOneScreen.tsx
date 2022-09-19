import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import MapScreen from "../components/MapScreen";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Tab One</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={{ height: 200 }}>
          <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MapScreen />
        <View style={{ height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
