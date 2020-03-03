/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

//add plugins
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	Code,
	Strikethrough,
	Subscript,
	Superscript,
	Underline,
	FontFamily,
	FontSize,
	FontColor,
	FontBackgroundColor,
	Highlight,
	HorizontalLine,
	RemoveFormat,
	SpecialCharacters, 
	SpecialCharactersEssentials,
	TodoList
];

var cores =  {
	// quantidade de colunas mostradas no grid de cor
	columns: 9,

	// quantidade de cores a serem mostradas 
	// 9 * 13 = 117
	documentColors: 117, 

	// definição de paleta de cores
	colors: [
	  {color: 'hsl(0, 0%, 0%)'}, {color: 'hsl(0, 0%, 12.5%)'},{color: 'hsl(0, 0%, 25%)'},{color: 'hsl(0, 0%, 37.5%)'},{color: 'hsl(0, 0%, 50%)'},
	  {color: 'hsl(0, 0%, 62.5%)'},{color: 'hsl(0, 0%, 75%)'},{color: 'hsl(0, 0%, 87.5%)'},{color: 'hsl(0, 0%, 100%)'},
	  {color: 'hsl(0, 100%, 10%)'},{color: 'hsl(0, 100%, 20%)'},{color: 'hsl(0, 100%, 30%)'},{color: 'hsl(0, 100%, 40%)'},{color: 'hsl(0, 100%, 50%)'},
	  {color: 'hsl(0, 100%, 60%)'},{color: 'hsl(0, 100%, 70%)'},{color: 'hsl(0, 100%, 80%)'},{color: 'hsl(0, 100%, 90%)'},
	  {color: 'hsl(30, 100%, 10%)'},{color: 'hsl(30, 100%, 20%)'},{color: 'hsl(30, 100%, 30%)'},{color: 'hsl(30, 100%, 40%)'},{color: 'hsl(30, 100%, 50%)'},
	  {color: 'hsl(30, 100%, 60%)'},{color: 'hsl(30, 100%, 70%)'},{color: 'hsl(30, 100%, 80%)'},{color: 'hsl(30, 100%, 90%)'},
	  {color: 'hsl(60, 100%, 10%)'},{color: 'hsl(60, 100%, 20%)'},{color: 'hsl(60, 100%, 30%)'},{color: 'hsl(60, 100%, 40%)'},{color: 'hsl(60, 100%, 50%)'},
	  {color: 'hsl(60, 100%, 60%)'},{color: 'hsl(60, 100%, 70%)'},{color: 'hsl(60, 100%, 80%)'},{color: 'hsl(60, 100%, 90%)'},
	  {color: 'hsl(90, 100%, 10%)'},{color: 'hsl(90, 100%, 20%)'},{color: 'hsl(90, 100%, 30%)'},{color: 'hsl(90, 100%, 40%)'},{color: 'hsl(90, 100%, 50%)'},
	  {color: 'hsl(90, 100%, 60%)'},{color: 'hsl(90, 100%, 70%)'},{color: 'hsl(90, 100%, 80%)'},{color: 'hsl(90, 100%, 90%)'},
	  {color: 'hsl(120, 100%, 10%)'},{color: 'hsl(120, 100%, 20%)'},{color: 'hsl(120, 100%, 30%)'},{color: 'hsl(120, 100%, 40%)'},{color: 'hsl(120, 100%, 50%)'},
	  {color: 'hsl(120, 100%, 60%)'},{color: 'hsl(120, 100%, 70%)'},{color: 'hsl(120, 100%, 80%)'},{color: 'hsl(120, 100%, 90%)'},
	  {color: 'hsl(150, 100%, 10%)'},{color: 'hsl(150, 100%, 20%)'},{color: 'hsl(150, 100%, 30%)'},{color: 'hsl(150, 100%, 40%)'},{color: 'hsl(150, 100%, 50%)'},
	  {color: 'hsl(150, 100%, 60%)'},{color: 'hsl(150, 100%, 70%)'},{color: 'hsl(150, 100%, 80%)'},{color: 'hsl(150, 100%, 90%)'},
	  {color: 'hsl(180, 100%, 10%)'},{color: 'hsl(180, 100%, 20%)'},{color: 'hsl(180, 100%, 30%)'},{color: 'hsl(180, 100%, 40%)'},{color: 'hsl(180, 100%, 50%)'},
	  {color: 'hsl(180, 100%, 60%)'},{color: 'hsl(180, 100%, 70%)'},{color: 'hsl(180, 100%, 80%)'},{color: 'hsl(180, 100%, 90%)'},
	  {color: 'hsl(210, 100%, 10%)'},{color: 'hsl(210, 100%, 20%)'},{color: 'hsl(210, 100%, 30%)'},{color: 'hsl(210, 100%, 40%)'},{color: 'hsl(210, 100%, 50%)'},
	  {color: 'hsl(210, 100%, 60%)'},{color: 'hsl(210, 100%, 70%)'},{color: 'hsl(210, 100%, 80%)'},{color: 'hsl(210, 100%, 90%)'},
	  {color: 'hsl(240, 100%, 10%)'},{color: 'hsl(240, 100%, 20%)'},{color: 'hsl(240, 100%, 30%)'},{color: 'hsl(240, 100%, 40%)'},{color: 'hsl(240, 100%, 50%)'},
	  {color: 'hsl(240, 100%, 60%)'},{color: 'hsl(240, 100%, 70%)'},{color: 'hsl(240, 100%, 80%)'},{color: 'hsl(240, 100%, 90%)'},
	  {color: 'hsl(270, 100%, 10%)'},{color: 'hsl(270, 100%, 20%)'},{color: 'hsl(270, 100%, 30%)'},{color: 'hsl(270, 100%, 40%)'},{color: 'hsl(270, 100%, 50%)'},
	  {color: 'hsl(270, 100%, 60%)'},{color: 'hsl(270, 100%, 70%)'},{color: 'hsl(270, 100%, 80%)'},{color: 'hsl(270, 100%, 90%)'},
	  {color: 'hsl(300, 100%, 10%)'},{color: 'hsl(300, 100%, 20%)'},{color: 'hsl(300, 100%, 30%)'},{color: 'hsl(300, 100%, 40%)'},{color: 'hsl(300, 100%, 50%)'},
	  {color: 'hsl(300, 100%, 60%)'},{color: 'hsl(300, 100%, 70%)'},{color: 'hsl(300, 100%, 80%)'},{color: 'hsl(300, 100%, 90%)'},
	  {color: 'hsl(330, 100%, 10%)'},{color: 'hsl(330, 100%, 20%)'},{color: 'hsl(330, 100%, 30%)'},{color: 'hsl(330, 100%, 40%)'},{color: 'hsl(330, 100%, 50%)'},
	  {color: 'hsl(330, 100%, 60%)'},{color: 'hsl(330, 100%, 70%)'},{color: 'hsl(330, 100%, 80%)'},{color: 'hsl(330, 100%, 90%)'}
	]
};

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontColor: cores,
	fontBackgroundColor: cores,
	toolbar: {
		items: [
			'heading',
			'|',
			'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'code', 'removeFormat',
			'|',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight',
			'|',
			'bulletedList', 'numberedList', 'todoList', 'alignment', 'indent', 'outdent',
			'|',
			'horizontalLine', 'blockQuote', 'specialCharacters', 'link', 'imageUpload', 'insertTable', 'undo', 'redo'
		],
		shouldNotGroupWhenFull: true
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		],
		styles: [
			'full',
			'alignLeft',
			'alignCenter',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'pt-br'
};
