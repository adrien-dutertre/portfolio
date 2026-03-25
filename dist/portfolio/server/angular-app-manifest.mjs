
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4123, hash: 'b182300420431c15721161ce69b5cf7e26cc18531010ab48c64200ead73cdc60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1145, hash: '9c8d5415b938dbd834b91392c1755d594e747845181e934ce508c9b8ef9bc519', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JZ5SOLMO.css': {size: 13194, hash: 'khqmm/gqJA8', text: () => import('./assets-chunks/styles-JZ5SOLMO_css.mjs').then(m => m.default)}
  },
};
