# Teste de Performance com K6

![k6](https://raw.githubusercontent.com/grafana/k6/master/assets/k6-logo-with-grafana.svg)

O Grafana k6 é uma ferramenta de teste de carga de código aberto que torna o teste de desempenho fácil e produtivo para as equipes de engenharia. k6 é gratuito, centrado no desenvolvedor e extensível.

Usando o k6, você pode testar a confiabilidade e o desempenho de seus sistemas e detectar regressões e problemas de desempenho com antecedência. O k6 ajudará você a criar aplicativos resilientes e de alto desempenho que podem ser dimensionados.

k6 é desenvolvido pela Grafana Labs e pela comunidade.

## Instalação
```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

## Execução
```bash
k6 run tests/teste-um.js
```
![rodando](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWwxdWU2bzI2NWdpcWlnbmw2cnBpZXA0bmRyb3IydTc2dmFkdDZ6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LFkCcxFr3RjCe5hdoP/giphy.gif)
