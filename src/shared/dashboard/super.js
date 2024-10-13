"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
class UI {
    render() {
        return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="utf-8" />
      <title>Bull monitor</title>
      <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="/public/cdn/styles.css"/>
      <script type="module" src="/public/cdn/main.js"></script>
    </head>
    <body>
      <div class="BlockingWarning">
        Scripts Externos Bloqueados
      </div>
      <div id="root">
       
      </div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </body>
    </html>
    `;
    }
}
exports.UI = UI;
//# sourceMappingURL=ui.js.map