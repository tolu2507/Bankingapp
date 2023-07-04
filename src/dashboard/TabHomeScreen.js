import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { AvatarComponent, Badge, Button, IconB } from "../components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Transaction from "./TransactionComponent";
import {
  ACCOUNT_NUMBER,
  AMOUNT,
  REMAINDER,
  buttons,
  featureCards,
  transaction,
} from "../constants";

const TabHomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerAvatar}>
        <AvatarComponent.Image
          size={40}
          source={{
            uri: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
          }}
        />
        <Text style={styles.textLight}>
          Hi, <Text style={styles.textDark}> Kemi</Text>
        </Text>
      </View>
      <View style={styles.notification}>
        <IconB icon={"bell"} iconColor="#0e7d65" />
        <Badge
          style={{
            position: "absolute",
            top: 18,
            right: 14,
            borderLeftColor: "white",
          }}
          size={12}
          fontSize={10}
        >
          2
        </Badge>
      </View>
    </View>
    <View style={styles.balance}>
      <View style={styles.abs}>
        <View style={styles.abss}>
          <View style={styles.items}></View>
          <View style={[styles.items, styles.c]}></View>
        </View>
      </View>
      <View style={styles.balances}>
        <Text style={[styles.text]}>Your Wallet ID</Text>
        <Text style={[styles.text, styles.greenText]}>{ACCOUNT_NUMBER}</Text>
      </View>
      <View style={[styles.balances, { alignItems: "flex-start" }]}>
        <Text style={[styles.text]}>Available Balance</Text>
        <Text style={[styles.text, styles.whiteText]}>
          {AMOUNT}
          <Text style={{ fontWeight: "400" }}>{REMAINDER}</Text>
        </Text>
      </View>
      <View style={styles.button}>
        {buttons.map(({ name, icon }) => (
          <Button
            key={name}
            icon={icon}
            mode="contained"
            textColor="green"
            labelStyle={{ fontSize: 15, fontWeight: "700" }}
            rippleColor="white"
            contentStyle={{ height: 45 }}
            buttonColor="#a7c725"
            style={{ borderRadius: 12, width: "47%" }}
          >
            {name}
          </Button>
        ))}
      </View>
    </View>
    <View style={styles.feature}>
      <Text style={[styles.textDark, { fontSize: 20 }]}>Features</Text>
      <View style={styles.featureView}>
        {featureCards.map(({ pay, type, icon }) => (
          <View style={styles.card} key={type}>
            <View style={styles.iconcard}>
              <AvatarComponent.Icon
                style={{ backgroundColor: "#a7c725" }}
                color="#02252f"
                size={40}
                icon={icon}
              />
            </View>
            <View style={{ gap: 2 }}>
              <Text style={[styles.textLight, { textAlign: "center" }]}>
                {pay}
              </Text>
              <Text style={[styles.textDark, { textAlign: "center" }]}>
                {type}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
    <View style={{ flex: 1 }}>
      <View style={styles.transactionHeader}>
        <Text style={[styles.textDark, { fontSize: 20 }]}>
          Recent Transactions
        </Text>
        <Button type="text" compact={true} textColor="#c1d90de5">
          See all
        </Button>
      </View>
      <FlatList
        data={transaction}
        renderItem={({ item }) => <Transaction {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
    <View style={styles.absoluteButton}>
      <Pressable
        style={({ pressed }) => pressed && styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons name={"home"} color={"green"} size={30} />
      </Pressable>
    </View>
  </View>
);

export default TabHomeScreen;

const styles = StyleSheet.create({
  transaction: { gap: 10 },
  absoluteButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: "#bbd708",
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 40,
    elevate: 5,
  },
  scroll: { borderWidth: 1, paddingVertical: 1, gap: 10, paddingBottom: 70 },

  avatar: {
    backgroundColor: "#eeeaea",
    borderRadius: 12,
    height: 40,
    width: 40,
  },

  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
    gap: 10,
    flex: 1,
    position: "relative",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  headerAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textLight: {
    fontSize: 12,
    color: "#e2d2d2ec",
    fontWeight: "700",
  },
  textDark: {
    fontSize: 12,
    color: "#020202eb",
    fontWeight: "bold",
  },
  notification: {
    postion: "relative",
  },

  balance: {
    backgroundColor: "#02252f",
    height: 200,
    borderRadius: 20,
    position: "relative",
    padding: 15,
    gap: 20,
  },
  abs: {
    position: "absolute",
    width: "100%",
    height: 90,
    right: 0,
    borderTopRightRadius: 20,
  },
  abss: {
    position: "relative",
    height: "100%",
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  items: {
    position: "absolute",
    width: 320,
    backgroundColor: "#134c4b90",
    height: 320,
    right: -80,
    borderRadius: 500,
    bottom: 0,
  },
  c: {
    backgroundColor: "#0f3e3d",
    width: 250,
    height: 250,
    right: -60,
    borderRadius: 500,
  },
  balances: {
    display: "flex",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 10,
    color: "#bdb9b9",
    fontWeight: "700",
  },
  greenText: {
    fontSize: 16,
    color: "#7ebb0d",
    fontWeight: "900",
  },
  whiteText: {
    fontSize: 25,
    color: "#f7f8f6",
    fontWeight: "700",
    textAlign: "justify",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  feature: {
    gap: 10,
  },
  featureView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    width: 90,
    borderWidth: 2,
    borderColor: "#dad8d8",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "#eeebebbf",
  },
  iconcard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  transactionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
