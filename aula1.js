// inicialização
import http from 'k6/http';
import { sleep } from 'k6';

// configuração
export const options = {
  vus: 1, // usuário
  duration: '10s'
}

// execução / código vu
export default function() {
  console.log("testando o k6");
  sleep(1);
}

// desmontagem
export function teardown(data) {
  console.log(data)
}