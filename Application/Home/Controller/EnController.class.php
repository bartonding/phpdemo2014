<?php
namespace Home\Controller;
use Think\Controller;
class EnController extends Controller {

    const LANG_FILE = './Application/Home/Lang/en-us.php';

    public function _initialize(){
        L(include self::LANG_FILE);
    }

    public function index(){
        $this->good = '很好，good';
        $this->assign('good1',$good);
        $this->display();
    }
}