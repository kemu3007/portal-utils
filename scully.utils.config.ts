import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];

setPluginConfig(baseHrefRewrite, { href: '/utils/' });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "utils",
  defaultPostRenderers,
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {}
};
