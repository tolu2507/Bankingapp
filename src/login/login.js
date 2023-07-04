import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, IconB, Input } from "../components";

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const handlePress = () => navigate("Dashboard");

  return (
    <View style={styles.login}>
      <View style={styles.loginview}>
        <View style={styles.view}>
          <IconB
            icon="chevron-left"
            iconColor={"white"}
            containerColor="#659693"
            size={14}
            mode="contained"
            onPress={handlePress}
            style={{ zIndex: 10 }}
          />
        </View>
        <View style={styles.social}>
          <Text style={[styles.text, styles.siginText]}> Sign in</Text>
          <View style={styles.socials}>
            {["google", "apple", "facebook", "instagram"].map((item) => (
              <View
                key={item}
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: "#eae0e0a0",
                  marginHorizontal: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                }}
              >
                <IconB
                  icon={item}
                  iconColor={"#011f1a"}
                  size={20}
                  onPress={handlePress}
                />
              </View>
            ))}
          </View>
          <Text style={styles.text}>or</Text>
        </View>
        <View style={styles.input}>
          <View style={styles.inputview}>
            <Text style={{ color: "grey" }}>Email</Text>
            <Input
              contentStyle={{
                backgroundColor: "#fefefe80",
                padding: 2,
                borderRadius: 15,
              }}
              placeholder="email"
              style={{ height: 50 }}
            />
          </View>
          <View style={styles.inputview}>
            <Text style={{ color: "grey" }}>Email</Text>
            <Input
              contentStyle={{
                backgroundColor: "#fefefe80",
                padding: 2,
                borderRadius: 15,
              }}
              placeholder="password"
              style={{ height: 50 }}
              right={
                <Input.Icon
                  contentStyle={{
                    backgroundColor: "#fefefe80",
                  }}
                  icon="eye"
                />
              }
            />
          </View>
          <Text style={[styles.text, styles.forgot]}>Forgot Password</Text>
        </View>
        <View style={styles.button}>
          <Button
            mode="contained"
            rippleColor="white"
            contentStyle={{ height: 45 }}
            buttonColor="#659693"
            onPress={handlePress}
            style={{ borderRadius: 12 }}
          >
            Login
          </Button>
        </View>
        <View style={styles.print}>
          <View style={styles.finger}>
            <IconB icon={"fingerprint"} size={30} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  social: {
    padding: 2,
    gap: 20,
    marginHorizontal: 25,
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  loginview: {
    flex: 1,
    gap: 12,
  },
  view: {
    height: 150,
    position: "relative",
    backgroundColor: "#02252f",
    paddingTop: 50,
    paddingHorizontal: 20,
    borderBottomEndRadius: 50,
    borderBottomStartRadius:50
  },
  text: {
    color: "#011f1a",
    textAlign: "center",
    fontSize: 16,
  },
  siginText: {
    fontSize: 27,
    fontWeight: "bold",
  },
  input: {
    gap: 25,
    backgroundColor: "#FEFEFE",
    marginBottom: 10,
    marginHorizontal: 25,
  },
  button: {
    marginHorizontal: 25,
  },
  inputview: {
    gap: 7,
    height: 60,
  },
  forgot: {
    textAlign: "right",
    fontWeight: "700",
  },
  print: {
    marginTop: 10,
    alignItems: "center",
    marginHorizontal: 25,
  },
  finger: {
    width: 50,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eddedeae",
    borderRadius: 12,
  },
});
