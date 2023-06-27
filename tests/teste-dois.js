import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

export const options = {
  stages: [
    { duration: '10s', target: '10'},
    { duration: '10s', target: '10'},
    { duration: '10s', target: '0'}
  ],
  thresholds: {
    checks: ['rate > 0.95'],
    http_req_duration: ['p(95) < 200']
  }

}

const data = new SharedArray('leitura do json', function() {
  return JSON.parse(open('./utils/dados.json')).numeros
})

export default function() {
  const decimal = data[Math.floor(Math.random() * data.length)].decimals

  const BASE_URL = `https://test.k6.io/pi.php?decimals=${decimal}`
  console.log(decimal)

  const res = http.get(BASE_URL)

  check(res, {
    'status code 200': (r) => r.status === 200
  })

  sleep(1)

}