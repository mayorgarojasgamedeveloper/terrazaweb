$('document').ready(function() {

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#username'));
    status += validar($('#password'));
    status += validar($('#name'));
    status += validar($('#last_name'));
    status += validar($('#email'));
    status += validar($('#phone'));

    if(status > 0) return 0;

    var usuarioNuevo = {
      username: $('#username').val(),
      password: $('#password').val(),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    }

    var usuario = {
      username: 'fernando',
      password: '12345678',
      name: 'Fernando',
      last_name: 'Mayorga',
      email: 'fer@gmail.com',
      phone: '32435757'
    }

    console.log(usuario);
    console.log(usuarioNuevo);

    $.post('https://donleonapi.herokuapp.com/user', usuarioNuevo, function(result){
        console.log(result);
    });

  });

});
