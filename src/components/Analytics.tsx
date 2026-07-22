"use client";

import { useEffect } from "react";
import { getAnalyticsInstance } from "@/lib/firebase";

export function Analytics() {
  useEffect(() => {
    getAnalyticsInstance();
  }, []);

  return null;
}
