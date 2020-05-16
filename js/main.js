$( document ).ready(function() {
    console.log( "Page ready!" );

    $.ajax({
    url: 'https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new',
    type: "GET",
//    dataType: "json",
    success: function (data) {
        alert(data);
        console.log(data);
        },
    error: function (error) {
        console.log($(error));
        }      
    });

    function drawSquare() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var context = canvas.getContext('2d');
      
          context.fillRect(20,20,100,100);
          context.clearRect(40,40,60,60);
          context.strokeRect(45,45,50,50);
        }
      }
});