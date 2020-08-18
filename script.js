function submit() {
    $(".btn-submit").click(function(){
        var name = $(".js-name").val()
        var email = $(".js-email").val()
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://smtl.gama.academy/leads/7f2b6f20-dcac-11ea-91f1-99fb0c9231dc",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify({
                name, email
            })
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            window.location.href = "thankspage.html"
          })
          .fail(function (error) {
              console.log(error)
          })
      });
}