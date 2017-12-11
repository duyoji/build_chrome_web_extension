let a = 0;
(() => {
  a++;
  console.log(a);
  // const alertLoop = () => {
  //   setTimeout(function alertLoop() {
  //     alert(1);
  //     // alertLoop();
  //     chrome.tabs.create({}, (tab) => {
  //       console.log(tab);
  //     });
  //   }, 0);
  // };
  // alertLoop();
})();