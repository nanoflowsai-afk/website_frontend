import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './attached_assets'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5000,
        allowedHosts: ['685c1c77-6148-4f21-843e-d95708a7c2e5-00-nsli0btd90lm.janeway.replit.dev'],
    },
    build: {
        outDir: 'dist',
    },
});
