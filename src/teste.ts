const input = {
  idUnidade: 1234,
  idSetores: [1234, 1235, 1236],
};

const agendamentos = [
  {
    id: "a298abd0-d2e2-458d-86c0-f3c2e4cf38f1",
    idUnidadeHis: 1234,
    idSetorHis: 1234,
  },

  {
    id: "a298abd0-d2e2-458d-86c0-f3c2e4cf28r4",
    idUnidadeHis: 1234,
    idSetorHis: 2324,
  },
];

const lugarErrado = agendamentos.some((agendamento) => {
  return (
    agendamento.idUnidadeHis === input.idUnidade &&
    input.idSetores.includes(agendamento.idSetorHis)
  );
});

console.log(lugarErrado);

const encodeBasic = Buffer.from(
  `6vrj9920uil9qvim8k9anv7gv5:poodonqk4eestg96g9isv62kltp307d0r9hat71rs8q5f99epad`
).toString("base64");

console.log(encodeBasic);

const idsFilas = [38, 39, 40, 37];
const queryString = idsFilas.join(",");

//define o timezone globalmente para a classe Date
process.env.TZ = "America/Sao_Paulo";
new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });

// const timeZone = 'America/Sao_Paulo'
// const timeZone2 = 'America/New_York'
// const currentDate =  new Date().toLocaleString('en-US', { timeZone: timeZone });
// const currentDate2 =  new Date().toLocaleString('en-US', { timeZone: timeZone2 });

// // currentDate.setHours(currentDate.getHours() + 1)

// console.log({
//     currentDate,
//     currentDate2
// });

function adjustDateWithTimeZone(
  date: any,
  dayToAdd: any,
  hoursToAdd: any,
  minutesToAdd: any
) {
  const timeZone = "America/Sao_Paulo";
  const adjustedDate = new Date(date);
  adjustedDate.setHours(adjustedDate.getHours() + hoursToAdd);
  adjustedDate.setMinutes(adjustedDate.getMinutes() + minutesToAdd);
  adjustedDate.setDate(adjustedDate.getDate() + dayToAdd);

  // Converte a data para o fuso horário desejado
  const adjustedDateInTimeZone = adjustedDate.toLocaleString("en-US", {
    timeZone,
  });

  return new Date(adjustedDateInTimeZone);
}

// Exemplo de uso:
const currentDate = new Date();
// Fuso horário desejado
const adjustedDate = adjustDateWithTimeZone(currentDate, 0, 0, -15);

console.log(adjustedDate);

const date = new Date("2023-10-06T20:45:00+00:00");

console.log(date.getTime());

//A8619C531ED6435D93417D7112D19EFE 22:10
//110C98715C6F434F80DBED048283DAD1 21:15
//797BE47ED1354B44BE49F4019C673CF0 21:45

let now = new Date();
now = new Date(
  Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  )
);

console.log(new Date(now.toISOString()));
