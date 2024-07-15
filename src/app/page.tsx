import Image from "next/image";
import Title from "./Title/Title";
import AddItemField from "./components/AddItemField";
import AddItemButton from "./components/AddItemButton";
import ToDoSection from "./Section/ToDoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <Title></Title>
      <ToDoSection></ToDoSection>
    </main>
  );
}
