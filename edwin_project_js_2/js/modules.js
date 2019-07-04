var imageModule = (function(){
  
  return {
      // This is images object we're looping thru

      carImages: {
          car1: 'http://codingfaculty.com',
          car2: 'http://codingfaculty.com',
          car3: 'http://codingfaculty.com',
          car4: 'http://codingfaculty.com',
          car5: 'http://codingfaculty.com',
          car6: 'http://codingfaculty.com',
          car7: 'http://codingfaculty.com',
          car8: 'http://codingfaculty.com',

      },

      // This method inserts images

      insertImages: function(){
        //   console.log(arguments[0]);

          var myArguments = '.' + arguments[0];

          var imagesContainer = document.querySelectorAll(myArguments);

          var output = "<div>";

        //   console.log(imagesContainer);

        for(var key in this.carImages){

            output += '<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
            output += '<a class="thumbnail" href="'+this.carImages[key]+'">';
            output += '<img class="img-responsive" src="project-styles/images/'+key+'.jpg'+'" alt="">';
            output += '</a>';
            output += '</div>';
        }; // loops thru an object

        for(var i = 0; i < imagesContainer.length; i++){

            imagesContainer[i].innerHTML = output;
        }

        output += '</div>';
      }
  }

})();