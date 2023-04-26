import React from "react";
import { Box } from "@chakra-ui/react";
import ServicePage from "@/components/Organisms/ServicePage/ServicePage";

const heroInfos = {
  headerTitle: "Corporativo",
  headerDescription: "Compartilhamento de dados bancários.",
  headerColor: "gray.50",
  title: "Open finance",
  version: "1.0.41",
  description:
    " A solução API Pix Cobrança possibilita a geração dinâmica de QR Codes dinâmicos para iniciação de pagamentos e verificação de liquidações dos mesmos pelos lojistas e fornecedores (usuários recebedores).",
  tags: ["Open finance", "Compartilhamento"],
};

const resources = [
  "Gerenciamento de notificações pelo recebedor de Pix associado à cobrança;",
  "Criação ou revisão de cobranças com identificação única;",
  "Verificação da situação de cobranças criadas; ",
  "Consultas agrupadas por situação e período; ",
  "Devolução de pagamentos realizados; ",
];

const steps = [
  "1. Chave Pix cadastrada no Banco do Nordeste;",
  "2. Exclusivo para pessoa jurídica.",
];

const processes = [
  {
    icon: "",
    title: "Múltiplos níveis de autorização",
    description:
      "ou escopos, segregando as funcionalidades da API de acordo com perfis/permissões dos usuários.",
  },
  {
    icon: "",
    title: "Autenticação via Mutual TLS (mTLS)",
    description: "técnica de autenticação mútua utilizando o protocolo TLS.",
  },
  {
    icon: "",
    title: "Autenticação",
    description:
      "os processos de cadastro e de configuração de permissões do cliente da API são autenticados pelo o Banco..",
  },
];

const infos = {
  title: "Open finance PIX",
  description: `O Pix pode ser utilizado 24 horas por dia, todos os dias do ano. Basta que o usuário tenha acesso à internet no momento da transação. E, além de transferir valores, com o Pix também é possível fazer pagamentos a estabelecimentos.`,
  descriptionStrong:
    "Qualquer negócio representado por uma Pessoa Jurídica que possua chave PIX cadastrada no BNB faz parte do nosso público alvo.",
};

export default function Corporative() {
  return (
    <Box>
      <ServicePage
        resources={resources}
        steps={steps}
        processes={processes}
        infos={infos}
        heroInfos={heroInfos}
      />
    </Box>
  );
}
