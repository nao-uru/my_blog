export const md = require('markdown-it')({
  injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
  breaks: true, // 改行コードを<br>に変換する
  html: true, // HTML タグを有効にする
  linkify: true, // URLに似たテキストをリンクに自動変換する
  typography: true,
  use: [
    ''
  ]
});

const mark = require('markdown-it-mark');

md.use(mark);
md.use(require('markdown-it-container'), 'sample', {
 
  validate: function(params) {
    return params.trim().match(/^style\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^style\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      return '<div class="style ' + md.utils.escapeHtml(m[1]) + '"><div class="style-body">';

    } else {
      return '</div></div>\n';
    }
  }
});
