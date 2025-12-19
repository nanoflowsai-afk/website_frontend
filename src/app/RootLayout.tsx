import { Outlet } from 'react-router-dom';
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function RootLayout() {
    return (
        <>
            <Outlet />
            <FloatingButtons />
        </>
    );
}
