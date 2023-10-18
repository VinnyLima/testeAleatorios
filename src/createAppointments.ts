import axios from "axios";

export const createAppointment = async () => {
  const { AWS_ACCESS_KEY_ID, AWS_SESSION_TOKEN } = process.env;
  try {
    const response = await axios.post(
      "https://rl52tdtey4.execute-api.us-east-1.amazonaws.com/checkin/ingestion",
      {
        codigoAgendamentoMotion: 1722245220,
        Action: "New",
        codigoPlanoMotion: 7732,
        dataInicioConsulta: "10/09/2023 06:00:00 PM",
        dataFimConsulta: "10/09/2023 09:30:00 PM",
        GUID: "ZZZ",
        cpfPaciente: "13698431785",
        email: "pvinfol@gmail.com",
        idSetor: 1411,
        idUnidade: 1189,
        endereco:
          "Rua Engenheiro Oscar Americano 1010   Morumbi, Sao Paulo, São Paulo, Brasil",
        idAgendamento: "000747139501",
        idEspecialidade: 24,
        idPaciente: 380562280,
        idPlano: 7732,
        linkSala: "",
        nomeEspecialidade: "Clinico Geral",
        nomeMaePaciente: "Luciene Silva De Carvalho Guissoni",
        nomeMedico: "Raquel Araujo Ferrari Camargo",
        nomePaciente: "Gabriel Meira",
        requisicao: "000747139501",
        sexoPaciente: "Masculino",
        telefone: "27995006516",
        tipoConsulta: "Presencial",
        tipoProduto: "CONSULTA2",
        url: " ",
        urlCancelamento: " ",
        Estado: "MARCADO",
        appointmentInfo: "",
        nomeUnidade: "Morumbi",
        OrigemAgendamento: "GENESIS",
        idBupPaciente: " ",
        idConvenio: 7585,
        NomeConvenio: "BRADESCO SEGUR",
        NomeSetor: "MORUMBI",
        NomePlano: "SAUDE BRADESCO NACIONAL ENF",
        carteirinha: "5555666662333",
        valCarteirinha: "2023-12-10",
        infoFastCheckin: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Amz-Content-Sha256":
            "beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3",
          "X-Amz-Security-Token": `${AWS_SESSION_TOKEN}`,
          "X-Amz-Date": "20231010T145201Z",
          Authorization: `AWS4-HMAC-SHA256 Credential=${AWS_ACCESS_KEY_ID}/20231010/us-east-1/execute-api/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date;x-amz-security-token, Signature=658a4aee9f7d6cb8af9dc2f95c8bc84273da9270b361aaff8dd9317273947575`,
        },
      }
    );

    console.log("Success creating appointment");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
