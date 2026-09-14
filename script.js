function calcularPorcentaje() {
    const porcentaje = Number(document.getElementById("porcentaje").value);
    const numero = Number(document.getElementById("numero").value);

    if (!porcentaje || !numero) {
        document.getElementById("resultadoPorcentaje").textContent =
            "Introduce ambos valores.";
        return;
    }

    const resultado = (porcentaje * numero) / 100;

    document.getElementById("resultadoPorcentaje").textContent =
        `${porcentaje}% de ${numero} = ${resultado}`;
}

function calcularEdad() {
    const fecha = document.getElementById("fechaNacimiento").value;

    if (!fecha) {
        document.getElementById("resultadoEdad").textContent =
            "Selecciona tu fecha de nacimiento.";
        return;
    }

    const nacimiento = new Date(fecha);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    document.getElementById("resultadoEdad").textContent =
        `Tienes ${edad} años.`;
}

function reglaDeTres() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    if (!a || !b || !c) {
        document.getElementById("resultadoRegla").textContent =
            "Introduce los tres valores.";
        return;
    }

    const resultado = (b * c) / a;

    document.getElementById("resultadoRegla").textContent =
        `Resultado: ${resultado}`;
}

const texto = document.getElementById("texto");

texto.addEventListener("input", () => {
    const contenido = texto.value;

    const palabras = contenido.trim()
        ? contenido.trim().split(/\s+/).length
        : 0;

    document.getElementById("palabrasResultado").textContent =
        `${palabras} palabras`;

    document.getElementById("caracteresResultado").textContent =
        `${contenido.length} caracteres`;
});
