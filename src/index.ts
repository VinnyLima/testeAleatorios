import dotenv from "dotenv";
import { createAppointment } from "./createAppointments";
import querystring from "querystring";
dotenv.config();

export function convertTimezoneDateToUTCDate(timeZone: string) {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone }));
  return new Date(
    Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    )
  );
}

const now = convertTimezoneDateToUTCDate("America/Sao_Paulo");

const tempoToleranciaAgendamentoMinutos = 15;

const toleratedDate = new Date(now.toISOString());
toleratedDate.setMinutes(
  toleratedDate.getMinutes() - tempoToleranciaAgendamentoMinutos
);

const inicioConsulta = new Date(
  new Date("10/11/2023").toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo",
  })
);

enum TipoConvenioEnum {
  PARTICULAR = 1,
  CONVENIO = 2,
}

export type TipoConvenio = keyof typeof TipoConvenioEnum;

export interface inputConsultLastTreatment {
  cpfPaciente: string;
  tipoAtendimento: number;
  tipoConvenio: TipoConvenioEnum;
  idEstabelecimento: number;
  diasBusca: number;
}

const inputTeste: inputConsultLastTreatment = {
  cpfPaciente: "12345678901",
  tipoAtendimento: 1,
  tipoConvenio: TipoConvenioEnum.PARTICULAR,
  idEstabelecimento: 1,
  diasBusca: 1,
};

console.log(querystring.stringify({ ...inputTeste }));

console.log({
  false_false: false && false,
  false_true: false && true,
  true_false: true && false,
  true_true: true && true,
});
