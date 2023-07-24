<?php

declare(strict_types=1);

namespace J7\WC_TW_City_Select\Frontend;

use Kucrut\Vite;

class Bootstrap
{

	const TEXT_DOMAIN = 'j7-wc-tw-city-select';


	public function init(): void
	{
		\add_action('wp_enqueue_scripts', [__CLASS__, 'enqueue_script']);
		\add_action('wp_footer', [__CLASS__, 'render_app']);
	}

	/**
	 * Render application's markup
	 */
	public static function render_app(): void
	{
		\printf('<div id="my-app" class="my-app"></div>');
	}


	/**
	 * Enqueue script
	 */
	public static function enqueue_script(): void
	{
		Vite\enqueue_asset(
			dirname(__DIR__) . '/js/dist',
			'js/src/main.tsx',
			[
				'handle' => self::TEXT_DOMAIN,
				'in-footer' => true,
			]
		);

		\wp_localize_script(self::TEXT_DOMAIN, 'appData', array(
			'apiUrl' => \site_url() . '/wp-json',
			'userId' => \wp_get_current_user()->data->ID,
		));

		\wp_localize_script(self::TEXT_DOMAIN, 'wpApiSettings', array(
			'root' => \esc_url_raw(rest_url()),
			'nonce' => \wp_create_nonce('wp_rest'),
		));
	}
}
