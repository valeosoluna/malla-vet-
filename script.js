document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  const estado = {};

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const prereqs = ramo.dataset.prerrequisitos.split(",").filter(Boolean);

    estado[id] = {
      aprobado: false,
      prerequisitos: prereqs,
    };

    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      estado[id].aprobado = !estado[id].aprobado;
      actualizarMalla();
    });
  });

  function actualizarMalla() {
    ramos.forEach(ramo => {
      const id = ramo.dataset.id;
      const data = estado[id];
      const cumple = data.prerrequisitos.every(pr => estado[pr]?.aprobado);

      ramo.classList.remove("aprobado", "bloqueado");

      if (!cumple && data.prerrequisitos.length > 0) {
        ramo.classList.add("bloqueado");
        ramo.disabled = true;
      } else {
        ramo.disabled = false;
        if (data.aprobado) {
          ramo.classList.add("aprobado");
        }
      }
    });
  }

  actualizarMalla();
});
