// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Toast from "js/bootstrap/src/toast";

(function () {
    let toastElList = [].slice.call(document.querySelectorAll(".toast"));
    let toastList = toastElList.map(function (toastEl) {
      return new Toast(toastEl);
  });

    toastList.forEach(function (toast) {
      toast.show();
    });
})();
