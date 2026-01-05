import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    console.log("DEBUG: Loaded VITE_API_BASE_URL:", env.VITE_API_BASE_URL);
    console.log("DEBUG: Proxy Target:", env.VITE_API_BASE_URL || 'http://localhost:5001');
    return {
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
            allowedHosts: true,
            proxy: {
                '/api': {
                    target: env.VITE_API_BASE_URL || 'http://localhost:5001',
                    changeOrigin: true,
                    secure: false,
                },
                '/uploads': {
                    target: env.VITE_API_BASE_URL || 'http://localhost:5001',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        build: {
            outDir: 'dist',
        },
    };
});
