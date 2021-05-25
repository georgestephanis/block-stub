
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './style.scss';

registerBlockType( 'block-stub/rename-me', {
	edit: function () {
		return (
			<p { ...useBlockProps() }>
				{ __( 'Editing UI Label', 'block-stub' ) }
			</p>
		);
	},
	save: function () {
		return (
			<p { ...useBlockProps.save() }>
				{ __( 'Rendered Content for Front End.', 'block-stub' ) }
			</p>
		);
	}
 } );
