import { useState } from "react";
import { TabType } from "../types";

const useHome = () => {
  const [tab, setTab] = useState<TabType>("dashboard");

  return { tab, setTab };
};

export default useHome;
