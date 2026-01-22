
import { LibraryProvider } from "../context/LibraryContext";
import MainContent from "../components/main/MainContent";

export default function Home() {
  return (
    <LibraryProvider>
      <MainContent />
    </LibraryProvider>
  );
}
