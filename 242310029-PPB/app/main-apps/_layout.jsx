import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>

      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Drawer.Screen
        name="premium"
        options={{
          title: "Premium",
        }}
      />

      <Drawer.Screen
        name="search"
        options={{
          title: "Search",
        }}
      />

    </Drawer>
  );
}