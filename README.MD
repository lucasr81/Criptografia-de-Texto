# Criptografia de Texto

## Descrição

Este projeto é uma aplicação web que permite criptografar e descriptografar textos usando um método simples de substituição de caracteres. As letras são substituídas por sequências de caracteres específicas conforme a criptografia definida. A aplicação também oferece uma funcionalidade de cópia para a área de transferência para facilitar o uso dos resultados criptografados ou descriptografados.

### Criptografia

As substituições de caracteres são:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

## Tecnologias Usadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização da página, incluindo a criação de uma área de resultado que simula um `textarea` com uma imagem e texto de fallback.
- **JavaScript**: Implementação da lógica de criptografia e descriptografia, controle da exibição de resultados e funcionalidade de cópia para a área de transferência.

## Autor

- **Lucas Rocha**: Desenvolvedor do projeto.

## Instruções de Uso

1. **Inserir Texto**: Digite o texto desejado na área de entrada.
2. **Criptografar ou Descriptografar**: Use os botões disponíveis para criptografar ou descriptografar o texto inserido.
3. **Resultado**: O resultado será exibido na área de resultado. Se o resultado estiver vazio, uma imagem com a mensagem "Nenhum resultado encontrado" será exibida.
4. **Copiar**: Use o botão "Copiar" para copiar o texto exibido para a área de transferência.

## Miniaturas e Ícones

- A imagem usada como fundo para a área de resultado quando não há texto é representada pelo arquivo `no-result-background.png`. Certifique-se de que esta imagem esteja no mesmo diretório que o arquivo CSS ou ajuste o caminho conforme necessário.

## Exemplo

![Exemplo de Resultado](no-result-background.png)

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Para qualquer dúvida ou sugestão, entre em contato com [Lucas Rocha](mailto:lucas@exemplo.com).
