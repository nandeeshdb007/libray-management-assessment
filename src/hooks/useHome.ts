import { useMemo, useState } from "react";
import { TabType } from "../types";
import { useLibrary } from "./useLibrary";

const useHome = () => {
   const { books, issueBook, } = useLibrary();

 const [tab, setTab] = useState<TabType>('dashboard');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  const categories = useMemo(() => ['all', ...new Set(books.map(b => b.category))], [books]);

  const filteredBooks = useMemo(() => {
    return books.filter(b => {
      const matchCategory = category === 'all' || b.category === category;
      const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [books, category, search]);

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

  return { tab, setTab, modal, setModal, selectedBook, handleIssueClick, handleCloseModal, categories, filteredBooks, handleConfirmIssue, setSearch, setCategory, search, category, selectedStudent,setSelectedBook, setSelectedStudent
 };
};

export default useHome;
