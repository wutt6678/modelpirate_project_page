function copyBibtex() {
  const bib = document.getElementById('bibtex');
  navigator.clipboard.writeText(bib.innerText).then(() => {
    const btn = document.getElementById('copy-bibtex');
    const old = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => { btn.innerText = old; }, 1500);
  });
}
