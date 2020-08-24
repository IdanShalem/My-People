const src = $('#users-t').html()
const template = Handlebars.compile(src)

$.ajax({
    method: 'GET',
    url: 'https://randomuser.me/api/?results=10',
    success: function(data) {
      const users = data.results.map(u => {return {name: `${u.name.first} ${u.name.last}`, email:u.email}})
      const newHTML = template({users})
      $('#users').append(newHTML)
    }
  });