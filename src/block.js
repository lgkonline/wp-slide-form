/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const {
	RichText,
	InspectorControls,
	BlockControls,
} = wp.editor;

const {
	PanelBody,
	TextareaControl,
	TextControl,
	Dashicon,
	Toolbar,
	Button,
	Tooltip,
} = wp.components;

/**
 * Register block
 */
export default registerBlockType("slide-form/block", {
	// Block Title
	title: __("Slide Form"),
	// Block Description
	description: __("Embedding form."),
	// Block Category
	category: "common",
	// Block Icon
	icon: "feedback",
	// Block Keywords
	keywords: [
		__("form"),
		__("slide"),
		__("request"),
	],
	attributes: {
		title: {
			type: "string"
		}
	},
	// Defining the edit interface
	edit: props => {
		const onChangeTitle = value => {
			props.setAttributes({ title: value });
		};

		return (
			<div className={props.className}>
				<RichText
					format="string"
					formattingControls={[]}
					placeholder={__("Form title")}
					onChange={onChangeTitle}
					value={props.attributes.title}
				/>
			</div>
		);
	},
	// Defining the front-end interface
	save: props => {
		console.log(props);
		return <h1 className="display-4">{__(props.attributes.title)}</h1>;
	},
});
