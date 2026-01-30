import { useState, useMemo, useCallback, useEffect } from "react";
import {
  books as initialBooks,
  students as initialStudents,
  createRecords,
} from "../contants/data";
import { Book, BorrowRecord, Student } from "../types";

export const useLibrary = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [records, setRecords] = useState<BorrowRecord[]>(createRecords());
  const [showPopup, setShowPopup] = useState<{
    isVisible: boolean;
    message: string;
    icon?: string;
  }>({
    isVisible: false,
    message: "",
    icon: "",
  });
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
   
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup((prev) => ({
          ...prev,
          isVisible: false,
        }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPopup.isVisible]);

  const bookMap = useMemo(() => new Map(books.map((b) => [b.id, b])), [books]);
  const studentMap = useMemo(
    () => new Map(students.map((s) => [s.id, s])),
    [students],
  );
  const categories = useMemo(
    () => ["all", ...new Set(books.map((b) => b.category))],
    [books],
  );

  const filteredBooks = useMemo(() => {
    return books.filter((b) => {
      const matchCategory = category === "all" || b.category === category;
      const matchSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [books, category, search]);

  const overdueRecords = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return records.filter((r) => {
      if (r.status === "returned") return false;
      const due = new Date(r.dueDate);
      due.setHours(0, 0, 0, 0);
      return due < today;
    });
  }, [records]);

  const analytics = useMemo(() => {
    const active = records.filter((r) => r.status !== "returned");
    const categories = new Map<string, number>();
    active.forEach((r) => {
      const book = bookMap.get(r.bookId);
      if (book)
        categories.set(book.category, (categories.get(book.category) || 0) + 1);
    });

    return {
      totalBooks: books.reduce((sum, b) => sum + b.totalCopies, 0),
      availableBooks: books.reduce((sum, b) => sum + b.availableCopies, 0),
      issuedBooks: active.length,
      overdueCount: overdueRecords.length,
      topBooks: [...books]
        .sort((a, b) => b.borrowCount - a.borrowCount)
        .slice(0, 5),
      categories,
    };
  }, [books, records, bookMap, overdueRecords]);

  const issueBook = useCallback(
    (bookId: string, studentId: string) => {

      console.log("callback -clled")
      const book = bookMap.get(bookId);
      const student = studentMap.get(studentId);

      console.log("book",book)
      console.log("studnet",student)

      if (!book || !student) {
        console.log("invalid book or student id")
        setShowPopup({
          isVisible: true,
          message: "Invalid book or student ID",
          icon: "error",
        });
        return;
      }
      if (book.availableCopies <= 0) {
        console.log("no copies available")
        setShowPopup({
          isVisible: true,
          message: "No copies availabl",
          icon: "error",
        });
        return;
      }
      if (student.borrowedBooks.includes(bookId)) {
        console.log("already borrowred")
        setShowPopup({
          isVisible: true,
          message: "Already Borrowred!",
          icon: "error",
        });
        return;
      }
      if (student.borrowedBooks.length >= 3) {
        console.log("max limit reached")
        setShowPopup({
          isVisible: true,
          message: "Maximum 3 books limit",
          icon: "error",
        });
        return;
      }

      const issueDate = new Date();
      const newRecord: BorrowRecord = {
        id: `R${String(records.length + 1).padStart(3, "0")}`,
        bookId,
        studentId,
        issueDate,
        dueDate: new Date(issueDate.getTime() + 14 * 24 * 60 * 60 * 1000),
        status: "issued",
      };

      setRecords((prev) => [...prev, newRecord]);
      setBooks((prev) =>
        prev.map((b) =>
          b.id === bookId
            ? {
                ...b,
                availableCopies: b.availableCopies - 1,
                borrowCount: b.borrowCount + 1,
              }
            : b,
        ),
      );
      setStudents((prev) =>
        prev.map((s) =>
          s.id === studentId
            ? { ...s, borrowedBooks: [...s.borrowedBooks, bookId] }
            : s,
        ),
      );

      setShowPopup({ isVisible: true, message: "Book issued!", icon: "success" });
      console.log("book-issued")

    },
    [bookMap, studentMap, records.length],
  );

  const returnBook = useCallback(
    (recordId: string) => {
      const record = records.find((r) => r.id === recordId);
      if (!record || record.status === "returned") return;

      const today = new Date();
      if (today > record.dueDate) {
        setShowPopup({ isVisible: true, message: "Over due", icon: "error" });
      }

      setRecords((prev) =>
        prev.map((r) =>
          r.id === recordId
            ? { ...r, returnDate: today, status: "returned" as const }
            : r,
        ),
      );
      setBooks((prev) =>
        prev.map((b) =>
          b.id === record.bookId
            ? { ...b, availableCopies: b.availableCopies + 1 }
            : b,
        ),
      );
      setStudents((prev) =>
        prev.map((s) =>
          s.id === record.studentId
            ? {
                ...s,
                borrowedBooks: s.borrowedBooks.filter(
                  (id) => id !== record.bookId,
                ),
              }
            : s,
        ),
      );

      setShowPopup({
        isVisible: true,
        message: "Book returned",
        icon: "success",
      });
    },
    [records],
  );

  const handleClosePopUp = () => {
    setShowPopup({ isVisible: false, message: "", icon: "" });
  };

  return {
    books,
    students,
    records,
    bookMap,
    studentMap,
    overdueRecords,
    analytics,
    issueBook,
    returnBook,
    categories,
    filteredBooks,
    setSearch,
    setCategory,
    search,
    category,
    showPopup,
    handleClosePopUp,
  };
};
