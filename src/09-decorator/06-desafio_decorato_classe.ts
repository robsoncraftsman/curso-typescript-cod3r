/* eslint-disable @typescript-eslint/ban-types */

(function () {
  // Desafio Decorator perfilAdmin
  const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false,
  };

  @somenteAdmin
  class MudancaAdministrativa {
    critico() {
      console.log('Algo crítico foi alterado!');
    }
  }

  type Construtor = { new (...args: any[]): {} };

  function somenteAdmin<T extends Construtor>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        if (!usuarioLogado.admin) {
          throw new Error('Usuário não é Admin');
        } else {
          console.log(args);
        }
        super();
      }
    };
  }

  new MudancaAdministrativa().critico();
})();
