import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    prerender: {
      handleMissingId: 'warn', // 日本語IDリンクの警告を抑制
      handleHttpError: 'warn'   // HTTPエラーを警告に変更
    }
  }
};

export default config;
