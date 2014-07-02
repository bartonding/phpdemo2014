<?php
namespace Home\Controller;
use Think\Controller;
class ZhController extends Controller {

    const LANG_FILE = './Application/Home/Lang/zh-cn.php';

    public function _initialize(){
        L(include self::LANG_FILE);
    }

    public function index(){
        $this->good = '很好，good';
        $this->assign('good1',$good);
        $this->display();
    }
}