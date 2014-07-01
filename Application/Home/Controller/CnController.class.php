<?php
namespace Home\Controller;
use Think\Controller;
class CnController extends Controller {

    const vpath = './Application/Home/View/';

    public function index(){
        // L('./Application/Home/Lang/zh-cn.php');
        $this->good = '很好，good';
        $this->assign('good1',$good);
        $this->display();
    }
}