import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-issue-1332-report',
  },
  resolve: {
    atomDirs: [
      { type: 'components/foo', dir: 'foo/src' },
      { type: 'components/bar', dir: 'bar/src' },
    ],
  },
  alias: {
    foo: require.resolve('./foo/src'),
    bar: require.resolve('./bar/src'),
  },
});
