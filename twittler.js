
       
      
// Show the user new tweets somehow. (You can show them automatically as they're created, or create a button that displays new tweets.
// Display the timestamps of when the tweets were created. This timestamp should reflect the actual time the tweets were created, and should not just be hardcoded.
// Design your interface so that you want to look at and use the product you're making.
// Allow the user to click on a username to see that user's timeline.


$(document).ready(function(){
  var $body = $('body');
  function createNewTweets() {
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + " " + tweet.created_at);
      $tweet.appendTo($body);
      $tweet.addClass('tweet');
      index -= 1;
    }
  }; createNewTweets();
  
  $('.update').on('click', createNewTweets);
  $('.remove').on('click', function(){
  $('.tweet').remove();
  });

  $('body').on('click', '.tweet', function() {
     var username =  $(this).text().split(' ')[0].slice(1, name.length - 1);
     $('.tweet').remove();
     var index = streams.users[username].length - 1;
     while(index >= 0) {
       var userTweet = streams.users[username][index];
       var $userTweet = $('<div></div>');
       $userTweet.text('@' + userTweet.user + ': ' + userTweet.message + " " + userTweet.created_at);
       $userTweet.appendTo($('body'));
       $userTweet.addClass('tweet');
       index -= 1;
     }
  });

});



