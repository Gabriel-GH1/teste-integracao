a) Estratégia de integração

A estratégia escolhida foi Bottom-Up, pois os módulos de Carrinho e Pagamento já estão prontos, enquanto a Interface ainda está em desenvolvimento. Assim, iniciamos pelos módulos de baixo nível.

⸻

b) Uso de Stub ou Driver

Foi utilizado Driver, pois ele simula a Interface do sistema, que ainda não está pronta, permitindo testar os módulos existentes.

⸻

c) Casos de teste
	1.	Carrinho com produtos válidos → pagamento aprovado → compra concluída
	2.	Carrinho vazio → tentativa de pagamento → erro exibido
	3.	Falha no pagamento → sistema deve informar erro ao usuário

  O código simula a integração entre os módulos de carrinho e pagamento, utilizando um driver para testar o fluxo.
