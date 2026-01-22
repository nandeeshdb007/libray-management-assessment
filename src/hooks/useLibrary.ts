import { useState } from "react";

const useLibrary = () => {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "books" | "students" | "transactions" | "analytics"
  >("dashboard");

  return { activeTab, setActiveTab };
};
export default useLibrary;
