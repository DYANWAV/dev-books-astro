import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint__dQ8CgCy.mjs';
import { manifest } from './manifest_DZ-tQLcE.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BKhoo2Z9.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CNmqZryM.mjs')],
]);;

const _page0 = () => import('./pages/libros/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libros/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/.pnpm/astro@5.0.0-beta.1_rollup@4.22.2_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1786dd6c-1e07-46f1-8801-b5312db249b0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
