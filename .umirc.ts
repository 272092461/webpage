import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  metas: [
    {
      name: 'viewport',
      content: 'min-width: 1200px;',
    },
  ],
});
