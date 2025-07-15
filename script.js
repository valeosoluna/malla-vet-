document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');

  // Cargar ramos aprobados desde localStorage
  let aprobados = JSON.parse(localStorage.getItem('aprobados')) || [];

  function marcarAprobados() {
    ramos.forEach(ramo => {
      const id = ramo.dataset.id;
      if (aprobados.includes(id)) {
        ramo.classList.add('aprobado');
      }
    });
  }

  function bloquearPorPrerrequisitos() {
    ramos.forEach(ramo => {
      const prerq = ramo.dataset.prerq.split(',').filter(p => p);
      const id = ramo.dataset.id;
      const cumple = prerq.every(p => aprobados.includes(p));
      if (!cumple && prerq.length > 0) {
        ramo.classList.add('bloqueado');
      }
    });
  }

  function actualizarEstado() {
    localStorage.setItem('aprobados', JSON.stringify(aprobados));
    ramos.forEach(ramo => ramo.classList.remove('aprobado', 'bloqueado'));
    marcarAprobados();
    bloquearPorPrerrequisitos();
  }

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      const id = ramo.dataset.id;
      if (ramo.classList.contains('bloqueado')) return;

      if (aprobados.includes(id)) {
        aprobados = aprobados.filter(x => x !== id);
      } else {
        aprobados.push(id);
      }

      actualizarEstado();
    });
  });

  actualizarEstado();
});
