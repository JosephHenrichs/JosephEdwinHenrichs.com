/* jshint esversion: 6 */
import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	MediaUpload
} = wp.blockEditor;

const {
	Button,
	ButtonGroup,
	RangeControl,
	FocalPointPicker,
	Dashicon,
	ColorPalette,
	ToggleControl,
	Placeholder
} = wp.components;

class BackgroundComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();

		this.state = {
			type: value.type || 'color',
			imageUrl: value.imageUrl || '',
			focusPoint: value.focusPoint || { x: 0.5, y: 0.5 },
			colorValue: value.colorValue || '#ffffff',
			overlayColorValue: value.overlayColorValue || '',
			overlayOpacity: value.overlayOpacity || 50,
			fixed: value.fixed || false,
			useFeatured: value.useFeatured || false
		};
		this.updateSetting( this.state );
	}

	getButtons() {
		let types = ['color', 'image'],
				labels = {
					'color': __( 'Color', 'neve' ),
					'image': __( 'Image', 'neve' )
				},
				buttons = [],
				self = this;
		types.map( function(type) {
			buttons.push(
					<Button
							isPrimary={self.state.type === type}
							isDefault={self.state.type !== type}
							onClick={(e) => {
								self.updateSetting( { type: type } );
							}}
					>
						{labels[type]}
					</Button> );
		} );

		return buttons;
	}

	render() {
		let self = this;

		const colors = [
			{ name: 'black', color: '#000000' },
			{ name: 'white', color: '#ffffff' },
			{ name: 'red', color: '#cc433c' },
			{ name: 'orange', color: '#d39b48' },
			{ name: 'green', color: '#95d45a' },
			{ name: 'blue', color: '#3972b8' }
		];

		return (
				<Fragment>
					{this.props.control.params.label && <span
							className="customize-control-title">{this.props.control.params.label}</span>}
					<div className="control--top-toolbar">
						<ButtonGroup className="neve-background-type-control">
							{this.getButtons()}
						</ButtonGroup>
					</div>
					<div className="control--body">
						{this.state.type === 'color' &&
						<Fragment><ColorPalette
								colors={colors}
								value={this.state.colorValue}
								onChange={(colorValue) => {
									self.updateSetting( { colorValue: colorValue } );
								}}
						/>
							<div
									className="neve-color-preview"
									style={{ backgroundColor: this.state.colorValue }}>
							</div>
						</Fragment>
						}
						{this.state.type === 'image' &&
						<Fragment>
							<ToggleControl
									label={__( 'Use Featured Image', 'neve' )}
									checked={this.state.useFeatured}
									onChange={(useFeatured) => {
										this.updateSetting( { useFeatured: useFeatured } );
									}}
							/>
							{!this.state.imageUrl &&
							<Placeholder
									icon="format-image"
									label={this.state.useFeatured ?
											__( 'Fallback Image', 'neve' ) :
											__( 'Image', 'neve' )}
							>
								<p>
									{__( 'Select from the Media Library or upload a new image',
											'neve' )}
								</p>
								<MediaUpload
										onSelect={(imageData) => {
											this.updateSetting( { imageUrl: imageData.url } );
										}}
										allowedTypes={['image']}
										render={({ open }) => (
												<Button isDefault onClick={open}>
													{__( 'Add Image', 'neve' )}
												</Button>
										)}
								/>
							</Placeholder>
							||
							<Fragment>
								<Button
										className="remove-image"
										isDestructive
										isLink
										onClick={() => {
											this.updateSetting(
													{ imageUrl: '', overlayColorValue: '' } );
										}}>
									<Dashicon icon="no"/>
									{this.state.useFeatured ?
											__( 'Remove Fallback Image', 'neve' ) :
											__( 'Remove Image', 'neve' )}</Button>
								<FocalPointPicker
										url={this.state.imageUrl}
										value={this.state.focusPoint}
										onChange={(val) => {
											let newPoint = {
												x: parseFloat( val.x ).toFixed( 2 ),
												y: parseFloat( val.y ).toFixed( 2 )
											};
											this.updateSetting( { focusPoint: newPoint } );
										}}/>
							</Fragment>}
							<ToggleControl
									label={__( 'Fixed Background', 'neve' )}
									checked={this.state.fixed}
									onChange={(fixed) => {
										this.updateSetting( { fixed: fixed } );
									}}
							/>
							<span className="customize-control-title">{
								__( 'Overlay Color', 'neve' )
							}</span>
							<ColorPalette
									colors={colors}
									value={this.state.overlayColorValue}
									onChange={(overlayColorValue) => {
										self.updateSetting(
												{ overlayColorValue: overlayColorValue } );
									}}
							/>
							<div
									className="neve-color-preview"
									style={{ backgroundColor: this.state.overlayColorValue }}>
							</div>
							<RangeControl
									label={__( 'Overlay Opacity', 'neve' )}
									value={this.state.overlayOpacity}
									onChange={(overlayOpacity) => {
										this.updateSetting( { overlayOpacity: overlayOpacity } );
									}}
									min="0"
									max="100"
							/>
						</Fragment>
						}
					</div>
				</Fragment>
		);
	}

	updateSetting(newValues) {
		this.setState( newValues );
		this.props.control.setting.set( {
			...this.props.control.setting.get(),
			...newValues
		} );
	}
}

BackgroundComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default BackgroundComponent;
