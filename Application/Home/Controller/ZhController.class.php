<?php
namespace Home\Controller;
use Think\Controller;
class ZhController extends Controller {

    const LANG_FILE = './Application/Home/Lang/zh-cn.php';

    public function _initialize(){
        L(include self::LANG_FILE);
    }

    public function index(){
        $this->display();
    }

    public function mentors(){
        $this->display();
    }

    public function contacts(){
        $this->display();
    }

    public function news(){
        $this->display();
    }

    public function teams(){
        $this->display();
    }

    public function testimonials(){
        $this->display();
    }

    public function values(){
        $this->display();
    }
}