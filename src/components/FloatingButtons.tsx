"use client";

import { ScrollToTop } from "./ScrollToTop";
import { Chatbot } from "./Chatbot";
import { FloatingContactMenu } from "./FloatingContactMenu";

export function FloatingButtons() {
  return (
    <>
      <ScrollToTop />
      <Chatbot />
      <FloatingContactMenu />
    </>
  );
}
