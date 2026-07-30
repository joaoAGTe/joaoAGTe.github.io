document.addEventListener('DOMContentLoaded', function () {
  var printBtn = document.querySelector('.print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }
});
