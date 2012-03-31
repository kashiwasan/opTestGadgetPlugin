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
  $("#tosaka_postform_body").val(hoge);
  $("#tosaka_postform_submit").click();
}

function testCase2() {
  /** the test case of posting via timeline. **/

  module("Timeline POST TEST");

  test("Timeline Post Test", function() {
    $.getJSON( openpne.apiBase + 'activity/search.json?count=1&apiKey=' + openpne.apiKey, function(json){
      result = json.data[0].body;
      if (result == hoge)
      {
        ok(result == hoge, 'timeline post success!');
        alert('ok test');
      }
      else
      {
        alert('NG test');
      }
    });
    // equal( result, hoge, "timeline post success!");
  });

}

function testCase3() {

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
