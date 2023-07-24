<?php

/**
 * Plugin Name:  J7 wc tw city select
 * Description: Woocommerce 結帳頁台灣縣市下拉選單
 * Author: j7.dev
 * Author URI: https://github.com/j7-dev
 * License: GPLv2
 * Version: 0.0.2
 */

namespace J7\WC_TW_City_Select;


require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/frontend.php';
// require_once __DIR__ . '/inc/admin.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__, '.env.production');
$dotenv->safeLoad();

$instance = new Frontend\Bootstrap();
// $instance = new Admin\Bootstrap();

$instance->init();
