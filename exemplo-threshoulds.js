import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '3s',
  threshoulds: {
    http_req_failed: ['rate < 0.01'], // falha seja inferior a 0.01
    http_req_duration: [{threshould: 'p(95) < 200', abortOnFail: true}], // 95% das requisições serão abaixo de 200mls
    checks: ['rate > 0.99']
  }
}

export default function(){
  const res = http.get('http://test.k6.io')
  
  check(res, {
    'status code é 200': (r) => r.status === 201
  })
}