var yourName = "Allia";
var friendsName = "Ashi";
var messages= 1;

$(".asend").click(function() {
	var friend = $(".friend-input").val();
    $(".received").append("<p>"+ friend + "</p>");
    $("h4").text("Number of messages received:" + messages);
});

$(".alsend").click(function() {
    $(".sent").show();
    var you = $(".your-input").val();
    $(".sent").append("<p>" + you + "</p>");
});

$(".received").css("background-color", "pink" );
$(".sent").css("background-color", "pink" );





//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}