"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    build: {
        outDir: 'dist/client',
        emptyOutDir: true,
    }
});
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
