import { NavigationContainer } from "@react-navigation/native";
import { InitialScreenOnStart } from "./InitialScreenOnStart";

export default function Navigation() {
  return (
    <NavigationContainer>
      <InitialScreenOnStart />
    </NavigationContainer>
  );
}
