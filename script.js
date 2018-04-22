$(document).ready(function() {
  $("#bdayQ").hover(function() {
      alert(Providing your birthday helps make sure you get the right Facebook experience
        for your age.If you want to change who sees this, go to the About section of your profile.For more details, please visit our Data Policy.);
    },
    function() {
      this.html($(""));
    });
})