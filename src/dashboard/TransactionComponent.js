import { Text, View,StyleSheet } from "react-native";
import { AvatarComponent } from "../components";

export default function Transaction(item) {
  const {
    icon,
    text,
    amount: { whole, remainder },
  } = item;
  const textColor = whole.startsWith("+") ? "#09a19e" : "#2d2626";
  return (
    <View style={styles.scrollContent}>
      <View style={styles.scrollContentRight}>
        <AvatarComponent.Icon style={styles.avatar} icon={icon} size={40} />
        <View>
          <Text
            style={[
              styles.textDark,
              { fontSize: 16, fontWeight: "bold", color: "#034733" },
            ]}
          >
            {text}
          </Text>
          <Text style={styles.textLight}>3,July 6:22pm</Text>
        </View>
      </View>
      <View style={styles.scrollContentLeft}>
        <View>
          <Text
            style={[
              styles.textDark,
              { fontSize: 16, fontWeight: "bold", color: textColor },
            ]}
          >
            {whole}
            <Text style={{ fontWeight: "400", color: textColor }}>
              {remainder}
            </Text>
          </Text>
          <Text style={[styles.textLight, { textDecorationLine: "underline" }]}>
            See details
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  scrollContentRight: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  scrollContentLeft: {},
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
  avatar: {
    backgroundColor: "#eeeaea",
    borderRadius: 12,
    height: 40,
    width: 40,
  },
});