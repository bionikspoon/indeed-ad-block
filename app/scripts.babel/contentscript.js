NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.parent = function parent() {
  return this.map(el => el.parentNode);
};

document.onreadystatechage = main;
main();

function main() {
  if (document.readyState !== 'complete') return;

  const sponsoredContent = document.querySelectorAll('span.sdn').parent();
  sponsoredContent.forEach(el => {
    el.style.display = 'none'; // eslint-disable-line no-param-reassign
  });
}
