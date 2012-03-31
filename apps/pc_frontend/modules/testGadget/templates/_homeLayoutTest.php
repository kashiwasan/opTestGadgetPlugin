<?php use_helper('Javascript') ?>
<?php //use_javascript('/opTestGadgetPlugin/js/jquery.mockjax.js', 'last') ?>

<?php 
/*
<script type="text/javascript">

$(function(){
var mockid = $.mockjax({
  url: "/api.php/push/search.json",
  responseText: [
  {
    "status": "success",
    "data": [
    {
      "id": "0.36561700 1329459000",
      "body": "ああああ",
      "category": "message",
      "unread": false,
      "created_at": "Wed, 26 Feb 9000 13:29:45 +0900",
      "icon_url": "http://houou02.local.jp/images/no_image.gif",
      "url": "/api_dev.php/message/checkDelete/11",
      "member_id_from": "11"
    },
    {
      "id": "0.99089900 1329460250",
      "body": "dummy11さんがあなたの投稿にコメントしました。",
      "category": "other",
      "unread": false,
      "created_at": "Wed, 26 Feb 0250 13:29:46 +0900",
      "icon_url": "http://houou02.local.jp/images/no_image.gif",
      "url": "/member/11/timeline",
      "member_id_from": "11"
    }
    ]
  }
  ]
});

$.mockjaxClear(mockid);
});
</script>
*/
?>

<div id="testGadget" style="display: none;">
  <h1 id="qunit-header">QUnit example</h1>
  <h2 id="qunit-banner"></h2>
  <div id="qunit-testrunner-toolbar"></div>
  <h2 id="qunit-userAgent"></h2>
  <ol id="qunit-tests"></ol>
  <div id="qunit-fixture">test markup, will be hidden</div>
</div>
