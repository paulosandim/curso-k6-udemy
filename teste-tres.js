import http from 'k6';
import { check, sleep } from 'k6';

export const options = {
  stages: [{ duration: '10s', target: '10'}],
  thresholds: {
    checks: ['rate < 0.95'],
    http_req_failed: ['rate < 0.01'],
    http_req_duration: ['p(95) < 500']
  }
}

export default function() {
  const BASE_URL = 'http://test-api.k6.io'

  const USER = `${Math.random()}@mail.com`
  const pass = 'user123'

  const res = http.post(`${BASE_URL}/user/registrer`, {
    login: USER,
    password: pass
  })

  check(res, {
    'sucesso ao logar': (r) => r.status === 201
  })

  sleep(1)
}