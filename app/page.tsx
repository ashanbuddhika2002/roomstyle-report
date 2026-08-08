import RoomStyleReport from "./components/RoomStyleReport";

export const metadata = {
  title: "RoomStyle Report — Discover Your Home's Style",
  description: "Upload a photo of your room and get your style spectrum, cohesion score, and a shopping list to complete the look.",
  openGraph: {
    title: "RoomStyle Report",
    description: "Discover your room's style, what's missing, and how to complete the look.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <RoomStyleReport />;
}