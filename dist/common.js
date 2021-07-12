// // ページ表示時にはレイヤーを非表示にするため、bodyから.fadeoutセレクタを取り除く
// $(window).on('load', function () {
//   $('body').removeClass('fadeout');
// });
// $('.focus-start').on('inview', function (event, isInView) {
//   if (isInView) {
//     $(this).addClass('focus-in-expand');
//   }
// });
// $('.fade-start').on('inview', function (event, isInView) {
//   if (isInView) {
//     $(this).addClass('fade-in');
//   }
// });
function copyToClipboard() {
  // コピー対象をJavaScript上で変数として定義する
  var copyTarget = document.getElementById("copyTarget");

  // コピー対象のテキストを選択する
  copyTarget.select();

  // 選択しているテキストをクリップボードにコピーする
  document.execCommand("Copy");

  // コピーをお知らせする
  alert("URLをコピーしました");
}
