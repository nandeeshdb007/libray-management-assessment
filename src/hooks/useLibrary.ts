import { useState } from "react";

const useDashboard = () => {
  const [activeTab, setActiveTab] = useState<
    "home" | "books" | "students" | "transactions" | "analytics"
  >("home");

  return { activeTab, setActiveTab };
};
export default useDashboard;
