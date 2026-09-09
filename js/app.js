// intoss:// 는 휴대폰의 토스 앱에서만 열려요.
// PC에서 눌렀을 때 아무 일도 안 일어나면 링크가 고장 난 것처럼 보이니까,
// 그 경우 왜 안 되는지 자리에서 알려줘요.
(function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  document.querySelectorAll('[data-scheme]').forEach(function (el) {
    var hint = document.getElementById(el.dataset.hint || '');

    if (!isMobile && hint) {
      hint.textContent = 'PC에서는 열리지 않아요. 아래 QR을 휴대폰으로 찍어주세요.';
    }

    el.addEventListener('click', function (e) {
      e.preventDefault();

      if (!isMobile) {
        if (hint) hint.textContent = '이 링크는 휴대폰의 토스 앱에서만 열려요.';
        return;
      }

      // 토스가 없으면 아무 일도 안 일어나요. 잠깐 기다렸다가 안내해요.
      var left = false;
      var onHide = function () { left = true; };
      document.addEventListener('visibilitychange', onHide, { once: true });

      window.location.href = el.dataset.scheme;

      setTimeout(function () {
        document.removeEventListener('visibilitychange', onHide);
        if (!left && hint) hint.textContent = '토스 앱이 필요해요.';
      }, 1500);
    });
  });
})();
