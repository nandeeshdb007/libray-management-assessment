import { useState } from "react";

const useDashboard = () => {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "books" | "students" | "transactions" | "analytics"
  >("dashboard");

  return { activeTab, setActiveTab };
};
export default useDashboard;
