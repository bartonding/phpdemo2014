<?php
namespace Home\Controller;
use Think\Controller;
class EnController extends Controller {

    const vpath = './Application/Home/View/';

    public function index(){
        $this->display(self::vpath.'index.html');
    }
}