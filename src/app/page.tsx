import Banner from "@/components/Banner";
import MainLayout from "@/components/MainLayout";
import TodoForm from "@/components/TodoForm";
import TodoLists from "@/components/TodoLists";
import ToggleMode from "@/components/ToggleMode";

export default function Home() {
  return (
    <main className="w-full min-h-screen text-slate-200">
      <Banner />
      <MainLayout />
    </main>
  );
}
