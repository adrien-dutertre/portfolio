
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 549, hash: '0c2e6032e1c348347945a7acccda61e531a2260bcdb6870a61d228832a0d77a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1062, hash: 'f66052d4ee44ba22bb0fd835437fc828d7a1c9f3a8c96869eab41ff314cd5108', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
