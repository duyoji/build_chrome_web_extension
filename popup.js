(() => {
  const alertLoop = () => {
    setTimeout(function alertLoop() {
      alert(1);
      alertLoop();
    }, 0);
  };
  alertLoop();
})();