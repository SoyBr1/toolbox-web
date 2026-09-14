function calculatePercentage() {

```
const percentage =
    Number(document.getElementById("percentage").value);

const number =
    Number(document.getElementById("percentage-number").value);

const result =
    document.getElementById("percentage-result");


if (
    document.getElementById("percentage").value === "" ||
    document.getElementById("percentage-number").value === ""
) {

    result.textContent =
        "Introduce el porcentaje y el número.";

    return;
}


const calculation =
    (percentage * number) / 100;


result.textContent =
    `${percentage}% de ${number} = ${calculation}`;
```

}

function calculateAge() {

```
const dateValue =
    document.getElementById("birth-date").value;

const result =
    document.getElementById("age-result");


if (!dateValue) {

    result.textContent =
        "Selecciona tu fecha de nacimiento.";

    return;
}


const birthDate =
    new Date(dateValue + "T00:00:00");

const today =
    new Date();


let years =
    today.getFullYear() -
    birthDate.getFullYear();


const monthDifference =
    today.getMonth() -
    birthDate.getMonth();


if (
    monthDifference < 0 ||
    (
        monthDifference === 0 &&
        today.getDate() < birthDate.getDate()
    )
) {

    years--;

}


if (years < 0) {

    result.textContent =
        "La fecha introducida no es válida.";

    return;
}


result.textContent =
    `Tienes ${years} años.`;
```

}

function calculateRuleOfThree() {

```
const a =
    Number(document.getElementById("rule-a").value);

const b =
    Number(document.getElementById("rule-b").value);

const c =
    Number(document.getElementById("rule-c").value);

const result =
    document.getElementById("rule-result");


if (
    document.getElementById("rule-a").value === "" ||
    document.getElementById("rule-b").value === "" ||
    document.getElementById("rule-c").value === ""
) {

    result.textContent =
        "Introduce los tres valores.";

    return;
}


if (a === 0) {

    result.textContent =
        "A no puede ser 0.";

    return;
}


const x =
    (b * c) / a;


result.textContent =
    `X = ${x}`;
```

}

const textCounter =
document.getElementById("text-counter");

textCounter.addEventListener("input", function () {

```
const text =
    textCounter.value;


const words =
    text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;


const characters =
    text.length;


document.getElementById("word-count").textContent =
    words;


document.getElementById("character-count").textContent =
    characters;
```

});
