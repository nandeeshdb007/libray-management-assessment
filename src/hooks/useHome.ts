import { useState } from "react";
import { TabType } from "../types";
import { useLibrary } from "./useLibrary";

const useHome = () => {
   const { issueBook } = useLibrary();

 const [tab, setTab] = useState<TabType>('dashboard');
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');


  const handleIssueClick = (bookId?: string) => {
    setModal(true);
    if (bookId) setSelectedBook(bookId);
  };

  const handleConfirmIssue = () => {
    if (selectedBook && selectedStudent) {
      issueBook(selectedBook, selectedStudent);
      setModal(false);
      setSelectedBook('');
      setSelectedStudent('');
    }
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedBook('');
    setSelectedStudent('');
  };

  return { tab, setTab, modal, setModal, selectedBook, handleIssueClick, handleCloseModal,  handleConfirmIssue, selectedStudent,setSelectedBook, setSelectedStudent
 };
};

export default useHome;
