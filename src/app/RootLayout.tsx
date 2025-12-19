import { Outlet } from 'react-router-dom';
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { RouteScrollToTop } from "@/components/RouteScrollToTop";

export default function RootLayout() {
    return (
        <>
            <RouteScrollToTop />
            <Outlet />
            <FloatingButtons />
        </>
    );
}
