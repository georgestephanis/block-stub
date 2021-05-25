<?php

// Plugin Name: Block Stub

function on_init_register_block_stub() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => 'block_stub_render',
		)
	);
}
add_action( 'init', 'on_init_register_block_stub' );

function block_stub_render( $block_attributes, $content ) {
	return "DYNAMIC CONTENT GOES HERE!";
}
