/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { App } from 'vue';
import CKEditorComponent from './ckeditor.js';

const CKEditor = {
	/**
	 * Installs the plugin, registering the `<ckeditor>` component.
	 *
	 * @param {App} App The Vue object.
	 */
	install( app ) {
		const version = Number(app.version.split('.')[0]);
		if (version < 3) {
			throw new Error(
				'The CKEditor plugin works only with Vue 3.x. ' +
				'For more information, please refer to ' +
				'https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html'
			);
		}
		app.component( 'ckeditor', CKEditorComponent );
	},
	component: CKEditorComponent
};

export default CKEditor;
