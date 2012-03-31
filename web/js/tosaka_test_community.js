/****************************************
** jQuery timeilinePlugin functions
** @parts 	: opTestGadgetPlugin
** @author	: Shouta Kashiwagi <ssg@teriyaki.jp>
*****************************************/

var hoge = 'hogehoge (' + getUnixTime() + ')';
var comment = "kashiwasan test. (" + getUnixTime() + ")";


function testCase() {

  /** the test case of 'tosaka' open and close. **/

  module("TOSAKA TEST");

  test("Tosaka Shutter Action Test", function() {
    $(".menubutton").click();
    equal( $(".menuform").css("display"),"block","open");  
    equal( $(".postform").css("display"),"none","close other");  


    $(".menubutton").click();
    equal( $(".menuform").css("display"),"none","click double and form close");  

    $(".postbutton").click();
    equal( $(".postform").css("display"),"block","open");  

    $(".postbutton").click();
    equal( $(".postform").css("display"),"none","click double and form close");  
  });

  $(".postbutton").click();
  // var hoge = 'hogehoge (' + getUnixTime() + ')';
  $("#gorgon-textarea-body").val(hoge);
  $("#gorgon-submit").click();
}

function testCase2() {
  /** the test case of posting via timeline. **/

  module("Timeline POST TEST");

  test("Timeline Post Test", function() {
    equal( $(".timelinebody-context:first").text(), hoge, "timeline post success!");
  });

  //var comment = "kashiwasan test. (" + getUnixTime() + ")"; 
  $(".timeline-now-comment-button:first").click();
  $(".comment-textarea:first").click();
  $(".comment-textarea:first").val(comment);
  $(".timeline-comment-button:first").click();
}

function testCase3() {
  /** the test case of posting via timeline comment(1). **/

  module("Timeline Comment Test");
  test("Timeline Comment Test", function() {
    equal($(".timeline-comment-context:first").text(), comment, "comment post success!");
  });

  $("#testGadget").show();
}

$(document).ready(function(){
  setTimeout("testCase()",2000);
  setTimeout("testCase2()", 4500);
  setTimeout("testCase3()", 7000);
});

function getUnixTime()
{
  return parseInt((new Date)/1000);
}
