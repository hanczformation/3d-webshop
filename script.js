(() => {
  const intro = document.getElementById('intro');
  const button = document.getElementById('introButton');
  const assembly = document.getElementById('emblemAssembly');
  const letters = document.getElementById('letters');
  const finalWord = document.getElementById('wordmarkFinal');

  const assemblyDone = 7100;
  const lettersDone = 9500;

  setTimeout(() => assembly?.classList.add('assembled'), assemblyDone);
  setTimeout(() => {
    letters?.classList.add('hide');
    finalWord?.classList.add('show');
  }, lettersDone);

  function closeIntro() {
    intro?.classList.add('hide');
    try { sessionStorage.setItem('hf_intro_seen', '1'); } catch (e) {}
    setTimeout(() => intro?.remove(), 800);
  }

  button?.addEventListener('click', closeIntro);
  button?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeIntro(); }
  });

  // Intro egyszer munkamenetenként. URL végére ?intro=1 írva mindig újra látható.
  const force = new URLSearchParams(location.search).get('intro') === '1';
  try {
    if (!force && sessionStorage.getItem('hf_intro_seen') === '1') intro?.remove();
  } catch (e) {}

  document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('mainNav')?.classList.toggle('open');
  });

  document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => {
    document.getElementById('mainNav')?.classList.remove('open');
  }));

  const form = document.getElementById('demoForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    if (note) note.textContent = 'Az előnézeti űrlap működik, de még nincs e-mail szolgáltatáshoz kötve. A végleges oldalon bekötjük.';
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
