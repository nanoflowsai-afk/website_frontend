"use client";

import { useLocation } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { Chatbot } from "./Chatbot";
import { FloatingContactMenu } from "./FloatingContactMenu";

export function FloatingButtons() {
  const location = useLocation();
  const pathname = location.pathname;

  const hideFloatingWidget = ["/contact", "/login", "/signup"].includes(pathname) || pathname.startsWith("/admin");
  const hideChatbot = ["/login", "/signup"].includes(pathname) || pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!hideChatbot && <Chatbot />}
      {!hideFloatingWidget && <FloatingContactMenu />}
    </>
  );
}
