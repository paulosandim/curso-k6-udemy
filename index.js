import http from 'k6/http';
import { check } from 'k6';
import { Counter } from 'k6/metrics'; // métrica de contador
import { Gauge } from 'k6/metrics'; // métrica de medição
import { Rate } from 'k6/metrics'; // métrica de taxas
import { Trend } from 'k6/metrics'; // métrica de tendências

export const options = {
  vus: 1,
  duration: '3s'
}

const chamadas = new Counter('quantidade_de_chamadas');
const myGauge = new Gauge('tempo_bloqueado');
const myRate = new Rate('taxa_req_200');
const myTrend = new Trend('txa_de_espera');

export default function(){
  const req = http.get('http://test.k6.io');
  chamadas.add(1)
  myGauge.add(req.timings.blocked);
  myRate.add(req.status === 200);
  myTrend.add(req.timings.waiting)
}