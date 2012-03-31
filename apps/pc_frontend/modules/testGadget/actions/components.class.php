<?php

/**
 * This file is part of the OpenPNE package.
 * (c) OpenPNE Project (http://www.openpne.jp/)
 *
 * For the full copyright and license information, please view the LICENSE
 * file and the NOTICE file that were distributed with this source code.
 */

/**
 * testGadgetComponents
 *
 * @package    OpenPNE
 * @subpackage action
 * @author     Shouta Kashiwagi <ssg@teriyaki.jp>
 */

class testGadgetComponents extends sfComponents
{
  public function executeHomeLayoutTest(sfWebRequest $request)
  {
    $this->getResponse()->addStyleSheet('http://code.jquery.com/qunit/git/qunit.css', 'last');
    $this->getResponse()->addJavascript('http://code.jquery.com/qunit/git/qunit.js', 'last');
    $this->getResponse()->addJavascript('/opTestGadgetPlugin/js/tosaka_test.js', 'last');
  }

  public function executeMemberLayoutTest(sfWebRequest $request)
  {
    $this->getResponse()->addStyleSheet('http://code.jquery.com/qunit/git/qunit.css', 'last');
    $this->getResponse()->addJavascript('http://code.jquery.com/qunit/git/qunit.js', 'last');
    $this->getResponse()->addJavascript('/opTestGadgetPlugin/js/tosaka_test_member.js', 'last');
  }

  public function executeCommunityLayoutTest(sfWebRequest $request)
  {
    $this->getResponse()->addStyleSheet('http://code.jquery.com/qunit/git/qunit.css', 'last');
    $this->getResponse()->addJavascript('http://code.jquery.com/qunit/git/qunit.js', 'last');
    $this->getResponse()->addJavascript('/opTestGadgetPlugin/js/tosaka_test_community.js', 'last');
  }
}
