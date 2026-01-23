import { useState } from "react";
import { TabType } from "../types";

const useHome = () => {
  const [tab, setTab] = useState<TabType>("dashboard");
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");

  const handleIssueClick = (bookId?: string) => {
    setModal(true);
    if (bookId) setSelectedBook(bookId);
  };

  return { tab, setTab, modal, setModal, selectedBook, handleIssueClick };
};

export default useHome;
