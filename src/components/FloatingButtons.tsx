"use client";

import { usePathname } from "next/navigation";
import { ScrollToTop } from "./ScrollToTop";
import { Chatbot } from "./Chatbot";
import { FloatingContactMenu } from "./FloatingContactMenu";

export function FloatingButtons() {
  const pathname = usePathname();
  
  const hideFloatingWidget = ["/contact", "/login", "/signup"].includes(pathname);
  const hideChatbot = ["/login", "/signup"].includes(pathname);

  return (
    <>
      <ScrollToTop />
      {!hideChatbot && <Chatbot />}
      {!hideFloatingWidget && <FloatingContactMenu />}
    </>
  );
}
