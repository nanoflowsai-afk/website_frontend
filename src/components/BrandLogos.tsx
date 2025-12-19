import React from 'react';

// Common sizing class is applied by parent, but these SVGs should standardly fill their container
// We will use standard viewBoxes (usually 24x24 or similar) and `currentColor` or specific brand colors.

export const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24l.81-.6z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export const SlackLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.042 15.123a2.521 2.521 0 1 0 0-5.042 2.521 2.521 0 0 0 0 5.042zm.84 0V18.9a2.521 2.521 0 1 0 5.042 0v-3.78H5.882zM18.9 8.819a2.521 2.521 0 1 0 0 5.042 2.521 2.521 0 0 0 0-5.042zm-.839 0V5.042a2.521 2.521 0 1 0-5.042 0v3.777h5.042zM8.819 18.9a2.521 2.521 0 1 0 5.042 0 2.521 2.521 0 0 0-5.042 0zm0-.84h-3.78a2.521 2.521 0 1 0 0 5.042h3.78V18.06zm6.303-13.018a2.521 2.521 0 1 0-5.042 0 2.521 2.521 0 0 0 5.042 0zm0 .84h3.78a2.521 2.521 0 1 0 0-5.042h-3.78v4.202z" fill="#36C5F0" />
    </svg>
);

export const ZoomLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#2D8CFF" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 13.5a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5h10a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-10zm13.15.5l5.85 3.5V6.5l-5.85 3.5v4z" />
    </svg>
);

export const NotionLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4 2.8H8.6c-4.4 0-4.6 3.1-4.6 3.1v12.2c0 3.1 2.4 3.1 2.4 3.1h9.1s2.4 0 2.4-3.1V5.9c0-3.1-2.5-3.1-2.5-3.1zM9.4 17.6c-.4 0-.7-.3-.7-.7v-8c0-.4.3-.7.7-.7s.7.3.7.7v8c0 .4-.3.7-.7.7zm2.6 0c-.4 0-.7-.3-.7-.7v-8c0-.4.3-.7.7-.7s.7.3.7.7v8c0 .4-.3.7-.7.7zm2.6 0c-.4 0-.7-.3-.7-.7v-5.3c0-.4.3-.7.7-.7s.7.3.7.7v5.3c0 .4-.3.7-.7.7z" />
    </svg>
);

export const LinearLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#5E6AD2" />
        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="white" />
    </svg>
);

export const HubspotLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF7A59" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM12 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 4.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
);

export const FigmaLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12V6H8.5A3.5 3.5 0 1 0 12 9.5V12zm0 0h3.5A3.5 3.5 0 1 0 12 8.5V12zm0 0v6h-3.5A3.5 3.5 0 1 1 12 14.5V12z" fill="#0ACF83" />
        <path d="M12 6V2.5A3.5 3.5 0 1 1 15.5 6H12z" fill="#FF7262" />
        <path d="M12 12V6h3.5A3.5 3.5 0 1 1 12 9.5V12z" fill="#A259FF" />
        <path d="M12 12h-3.5A3.5 3.5 0 1 1 12 8.5V12z" fill="#F24E1E" />
        <path d="M8.5 24A3.5 3.5 0 0 1 8.5 17H12v3.5A3.5 3.5 0 0 1 8.5 24z" fill="#1ABCFE" />
    </svg>
);

export const DiscordLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.32 4.37a19.79 19.79 0 0 0-4.929-1.515 13.67 13.67 0 0 0-.642 2.68 18.2 18.2 0 0 0-5.5 0 13.69 13.69 0 0 0-.642-2.68 19.76 19.76 0 0 0-4.929 1.515 14.1 14.1 0 0 0-2.39 15.65 20.25 20.25 0 0 0 6.13 3.09 14.6 14.6 0 0 0 1.54-2.52 10.74 10.74 0 0 1-2.42-1.16l.84-.63a14.5 14.5 0 0 0 9.24 0l.84.63a10.74 10.74 0 0 1-2.42 1.16 14.6 14.6 0 0 0 1.54 2.52 20.26 20.26 0 0 0 6.13-3.09 14.1 14.1 0 0 0-2.39-15.65zM8.56 14.5c-1.15 0-2.1-.9-2.1-2s.93-2 2.1-2 2.12.9 2.1 2-.92 2-2.1 2zm6.88 0c-1.15 0-2.1-.9-2.1-2s.93-2 2.1-2 2.12.9 2.1 2-.92 2-2.1 2z" />
    </svg>
);

export const SpotifyLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S16.6 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.9-9.4-1-3.7.8-7 1.5-9.8 1.5-.4 0-.7-.3-.7-.7s.3-.7.7-.7c3.1-.1 6.6.6 9.4 1.7.4-1.1.2 1.5-.1 1.8zm1.3-2.9c-.3.4-.8.5-1.2.3-3-1.8-7.6-2.4-11.1-1.3-.5.1-.9-.2-1.1-.7s.2-.9.7-1.1c4.1-1.2 9.2-.6 12.6 1.5.4.3.5.8.3 1.3zm.1-3C15.3 9.1 8.9 8.9 5.2 10c-.6.2-1.2-.2-1.4-.8s.2-1.2.8-1.4c4.3-1.3 11.4-1.1 15.6 1.4.5.3.7 1 .4 1.5s-1 .8-1.5.5z" />
    </svg>
);

export const ChromeLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.5A6.5 6.5 0 1 1 5.5 12 6.5 6.5 0 0 1 12 5.5z" fill="#FFF" />
        <path d="M12 5.5A6.5 6.5 0 1 1 5.5 12 6.5 6.5 0 0 1 12 5.5z" stroke="#4285F4" strokeWidth="2" />
        <path d="M12 2a10 10 0 0 1 8.66 5H8.66L12 2z" fill="#EA4335" />
        <path d="M20.66 7A10 10 0 0 1 12 22l-5-8.66h13.66z" fill="#34A853" />
        <path d="M3.34 7l5 8.66L3.34 24.32A10 10 0 0 1 3.34 7z" fill="#FBBC05" />
        <circle cx="12" cy="12" r="4.5" fill="#FFF" />
        <circle cx="12" cy="12" r="3.5" fill="#4285F4" />
    </svg>
);

export const JiraLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0052CC" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.57 11.85h-6.2a5.37 5.37 0 0 1 5.37-5.37 5.37 5.37 0 0 1 .83 10.74V11.85zM5.37 24a5.37 5.37 0 0 1 0-10.74h6.2v5.37A5.37 5.37 0 0 1 5.37 24zm13.26-6.78h-6.2a5.37 5.37 0 0 1 5.37-5.37 5.37 5.37 0 0 1 .83 10.74v-5.37z" />
    </svg>
);

export const DriveLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.3 4.2L4 11.6h16.2l4.3-7.4H8.3z" fill="#0066DA" />
        <path d="M20.3 11.6l-4.3 7.4H7.4l4.3-7.4h8.6z" fill="#00AC47" />
        <path d="M7.4 19l8.6 0-4.3 7.4-8.6 0L7.4 19z" fill="#E24335" transform="rotate(-60 7.4 19) translate(1.4 -0.2)" />
        <path d="M7.43 19.3h8.43L11.5 26.8 3.06 26.8 7.43 19.3z" fill="#EA4335" />
    </svg>
);

export const ZapierLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF4F00" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13.5h7.5V22l9-13.5h-7.5V0L3 13.5z" />
    </svg>
);

export const DropboxLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0061FF" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.5l6 3.9-6 3.9-6-3.9 6-3.9zm12 0l6 3.9-6 3.9-6-3.9 6-3.9zM6 13.3l6 3.9-6 3.9-6-3.9 6-3.9zm12 0l6 3.9-6 3.9-6-3.9 6-3.9zM12 9l-6 3.9 6 3.9 6-3.9-6-3.9z" />
    </svg>
);

export const YoutubeLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5 6.2c-.3-1.1-1.2-2-2.3-2.3C19.2 3.3 12 3.3 12 3.3s-7.2 0-9.2.6c-1.1.3-2 1.2-2.3 2.3C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1.1 1.2 2 2.3 2.3 2 .6 9.2.6 9.2.6s7.2 0 9.2-.6c1.1-.3 2-1.2 2.3-2.3.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
    </svg>
);

export const XLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const SheetsLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#0F9D58" />
        <path d="M14 2v6h6" fill="#34A853" opacity=".5" />
        <path d="M16 13h-8v-2h8v2zm0 4h-8v-2h8v2z" fill="#FFF" />
    </svg>
);

export const InstagramLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="#000" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="#000" strokeWidth="2" />
        <circle cx="18" cy="6" r="1.5" fill="#000" />
    </svg>
);

// Correct Zendesk Logo (Usually 4 blocks forming a Z, or the big Z)
// Simplified to standard Z brand mark for clarity in small size
export const ZendeskLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#03363D" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9 8.2h-1.6L5.6 2.5l1.6-1.6 5.7 5.7zm0 1.6L7.2 15.5l-1.6-1.6 5.7-5.7h1.6zM11.1 15.8h1.6L18.4 21.5l-1.6 1.6-5.7-5.7zM11.1 14.2L16.8 8.5l1.6 1.6-5.7 5.7h-1.6z" />
    </svg>
);

export const CalendlyLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#006BFF" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6l5.25 3.15-.75 1.23L11 14.15V7z" />
    </svg>
);

export const ShopifyLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#7AB55C" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10l-6-3-6 3-2.5 8.5L5 22h14l1.5-3.5L18 10z" stroke="#96BF48" strokeWidth="2" fill="none" />
        <path d="M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#96BF48" />
    </svg>
);

// Correct Mailchimp (Monkey Face)
export const MailchimpLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FFE01B" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFE01B" />
        <path d="M5.5 12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-1-.5-2-1.5-2.5.5-1 1.5-2 3-2 2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5-1.5 0-3-1-3.5-2.5 0 2.5-2 4.5-4.5 4.5S3.5 14.5 3.5 12c0-2.5 2-4.5 4.5-4.5.5 0 1 .1 1.5.3-.2.5-.5 1.1-.5 1.7 0 2.5 2 4.5 4.5 4.5.5 0 1-.1 1.5-.3.5.5 1 1.5 1 2.5 0 1.5-1 2.5-2.5 2.5-1.5 0-2.5-1-2.5-2.5 0-1.5 1-2.5 2.5-2.5 1 0 2 .5 2.5 1.5C14.5 11 15 10 15 9c0-1.5-1-2.5-2.5-2.5-1.5 0-2.5 1-2.5 2.5 0 1 1 2 2.5 2.5 1 0 2-.5 2.5-1.5" fill="black" />
    </svg>
);

export const WhatsappLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" fill="#25D366" />
        <path d="M16 14.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.1-.3.1-.6 0-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.2-.3.4-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3s-.4-1.1-.6-1.4c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 2.9 4.8 4.1 2.8 1.1 2.8.7 3.3.7.5 0 1.6-.7 1.8-1.3.2-.7.2-1.2.1-1.3-.1-.1-.3-.2-.5-.3z" fill="#FFF" />
    </svg>
);

export const StripeLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#635BFF" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10.8c-2.4 0-4.6.8-4.6 3 0 1.2.9 2 2.8 2.2l1.6.3c1.7.3 2 .9 2 1.6 0 .8-.9 1.3-2.2 1.3-2.6 0-4.8-1-4.8-1l-.8 3.5s2.3 1 5.4 1c2.8 0 5-1.1 5-4.2 0-3.3-4.5-3.5-4.5-5 0-.4.4-.9 1.6-.9 1.2 0 3.3.6 3.3.6l.8-3.3s-1.8-.7-4-.7-4.4 1.3-4.4 4.1c0 3.4 4.8 3.6 4.8 5.7 0 .5-.4.8-1.5.8-1.4 0-2.8-.7-2.8-.7l-.8 3.4s2.1 1.1 5.3 1.1c3.1 0 5.4-1.3 5.4-4.5 0-4-6.3-4-6.3-6.5 0-.7.7-1.1 1.9-1.1 1 0 2.2.3 2.2.3l.8-3.2c-.3 0-2.2-.6-4.6-.6z" />
    </svg>
);

export const TrelloLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0079BF" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#0079BF" />
        <rect x="5.5" y="5" width="5.5" height="10" rx="1" fill="#FFF" />
        <rect x="13" y="5" width="5.5" height="6" rx="1" fill="#FFF" />
    </svg>
);

export const AnalyticsLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#E37400" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v18H3z" fill="none" />
        <path d="M7 17h2v-5H7v5zm4 0h2v-9h-2v9zm4 0h2v-3h-2v3z" fill="#F9AB00" />
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="#F9AB00" />
    </svg>
);

export const MessengerLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#006AFF" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.03 2 11c0 2.86 1.48 5.42 3.79 7.04V22l3.47-1.92c.86.24 1.77.37 2.74.37 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.2 12.33l-2.6-2.77-5.1 2.77 5.6-5.96 2.65 2.78 5.05-2.78-5.6 5.96z" />
    </svg>
);

export const RedditLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF4500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FF4500" />
        <path d="M17.4 10.9c.2-.2.3-.5.3-.8 0-.6-.5-1.1-1.1-1.1-.4 0-.7.2-.9.5-1.1-.7-2.6-1.1-4.2-1.2l.7-3.4 2.4.5c.1.5.6.9 1.1.9.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1-.5 0-.9.3-1 .7l-2.6-.6c-.1 0-.2 0-.3.1-.1.1-.2.2-.2.4l-.8 3.8c-1.7.1-3.2.5-4.3 1.2-.2-.3-.5-.5-.9-.5-.6 0-1.1.5-1.1 1.1 0 .3.2.6.4.8-.4.7-.7 1.5-.7 2.4 0 2.4 2.9 4.4 6.5 4.4s6.5-2 6.5-4.4c.1-.9-.2-1.7-.6-2.4zM10 16c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm4.2 2c-1.3 1.3-3.1 1.3-4.4 0-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .9.9 2.1.9 3 0 .2-.2.5-.2.7 0 .2.2.2.5 0 .7zm-.2-2c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" fill="#FFF" />
    </svg>
);

export const AsanaLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3.5" fill="#F06A6A" />
        <circle cx="19" cy="12" r="3.5" fill="#FCBD00" />
        <circle cx="5" cy="12" r="3.5" fill="#FC636B" />
    </svg>
);

export const IntercomLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="black" />
        <path d="M6 18h2.5v-6c0-2.4 3.6-2.6 3.6 0v6h2.5v-9c0-3.4-4-3.5-5.2-1.7v-1.4H6v12.1z" fill="white" />
        <path d="M18.8 18h-2.5v-6c0-2.4-3.6-2.6-3.6 0v6h-2.5v-9c0-3.4 4-3.5 5.2-1.7v-1.4h3.4v12.1z" fill="white" />
    </svg>
);

export const OpenAILogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.06 6.06 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 6 6 0 0 0 10.27-1.3 6 6 0 0 0 3.25-9.97zM9 16.5l3-1.7v5.8a4.5 4.5 0 0 1-3.5-2.05V16.5zm-3.5-2a4.5 4.5 0 0 1 1.25-2.28L10 14l-4.5 2.6V14.5zm0-4.5V6.75a4.43 4.43 0 0 1 2.22 1.25L5.5 11l-2-3.5zm7-4l3 1.7v-5.8a4.5 4.5 0 0 1 3.5 2.05V6zm3.5 2a4.5 4.5 0 0 1-1.25 2.28L14 8l4.5-2.6v2.1zm0 4.5v3.25a4.5 4.5 0 0 1-2.22-1.25L18.5 11l2 3.5z" fill="#000" />
    </svg>
);

export const GmailLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6z" fill="#FFF" />
        <path d="M22 6l-10 7L2 6" stroke="#EA4335" strokeWidth="2.5" fill="none" />
        <path d="M2 6v12h18V6" stroke="#EA4335" strokeWidth="0" fill="none" />
        <path d="M4 18h16" stroke="#EA4335" strokeWidth="0" fill="none" />
        {/* Simplified M Envelope */}
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335" />
    </svg>
);

export const AirtableLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L21 6.5V17.5L12 22L3 17.5V6.5L12 2Z" fill="#F82B60" />
        <path d="M12 5.5L17.5 8.25V14.75L12 17.5L6.5 14.75V8.25L12 5.5Z" fill="white" />
    </svg>
);

export const GithubLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.74c0 .26.18.58.69.48C19.13 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
);

export const MetaLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0081FB" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.98 12.02c-1.3 0-2.45.69-3.13 1.73-.68 1.04-1.83 1.73-3.13 1.73-2.07 0-3.75-1.68-3.75-3.75s1.68-3.75 3.75-3.75c1.3 0 2.45.69 3.13 1.73.68 1.04 1.83 1.73 3.13 1.73 2.07 0 3.75-1.68 3.75-3.75S19.05 2.22 16.98 2.22c-2.6 0-4.9 1.38-6.26 3.47C9.36 3.6 7.06 2.22 4.46 2.22 1.99 2.22 0 4.21 0 6.67S1.99 11.12 4.46 11.12c1.3 0 2.45-.69 3.13-1.73.68-1.04 1.83-1.73 3.13-1.73 2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75c-1.3 0-2.45-.69-3.13-1.73-.68-1.04-1.83-1.73-3.13-1.73-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75c2.6 0 4.9-1.38 6.26-3.47 1.36 2.09 3.66 3.47 6.26 3.47 2.47 0 4.46-1.99 4.46-4.45s-1.99-4.45-4.46-4.45z" />
    </svg>
);

export const PaypalLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#003087" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.06 20.35l2.4-15.3A1.88 1.88 0 0 1 11.3 3.5h4.63c3.06 0 5.48 2.08 5.48 5.6 0 2.44-1.12 4.2-2.73 5.3-1.2.82-2.65.99-3.66.99h-1.46c-.4 0-.75.3-.81.7l-1 6.3c-.04.28-.28.5-.56.5H8.3c-.5 0-.89-.47-.81-.96.02-.13.06-.26.11-.38l-.54-1.2z" fill="#003087" />
        <path d="M17.65 8.95c0-1.74-.75-3.04-2.22-3.8-.93-.48-2.05-.59-3.66-.59h-3.4c-.45 0-.85.31-.92.76l-.41 2.58h2.08c2.94 0 5.38.72 5.38 3.7 0 .58-.06 1.13-.18 1.65.15-.09.3-.19.43-.28 1.77-1.22 2.9-2.72 2.9-4.02z" fill="#009cde" />
        <path d="M9.46 12.85l-.54 3.43c-.05.31.18.59.5.59h2.15l.93-5.91c.04-.28.28-.5.56-.5h1.16c1.68 0 2.94-.49 3.61-1.36-.18 2.1-1.8 3.77-4.24 3.77h-1.46c-.4 0-.75.3-.81.7l-.68 4.31c-.04.28-.28.5-.56.5H7.3c-.5 0-.89-.47-.81-.96.08-.47.19-1.06.49-2.92.05-.31.32-.54.63-.54h1.85z" fill="#012169" />
    </svg>
);
