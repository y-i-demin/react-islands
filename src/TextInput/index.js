import React from 'react';
import Control from '../Control';

class TextInput extends Control {
    constructor(props) {
        super(props);

        this.onClearClick = this.onClearClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        const { value } = this.props;

        let hasClear;
        if (this.props.hasClear) {
            let clearClassName = 'input__clear';

            if (value) {
                clearClassName += ' input__clear_visible';
            }

            hasClear = (
                <i className={clearClassName} onClick={this.onClearClick}/>
            );
        }

        return (
            <span className={this.className()}>
                <span className="input__box">
                    <input {...this.getControlHandlers()} ref="control" className="input__control"
                        name={this.props.name}
                        type={this.props.type}
                        disabled={this.props.disabled}
                        placeholder={this.props.placeholder}
                        autoComplete={this.props.autocomplete}
                        value={value}
                        onChange={this.onInputChange}
                    />
                    {hasClear}
                </span>
            </span>
        );
    }

    className() {
        let className = 'input';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' input_theme_' + theme;
        }
        if (this.props.size) {
            className += ' input_size_' + this.props.size;
        }
        if (this.props.disabled) {
            className += ' input_disabled';
        }
        if (this.state.hovered) {
            className += ' input_hovered';
        }
        if (this.state.focused) {
            className += ' input_focused';
        }
        if (this.props.hasClear) {
            className += ' input_has-clear';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onInputChange(e) {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(e.target.value, this.props);
    }

    onClearClick(e) {
        this.setState({ focused: true });

        if (this.props.onClearClick) {
            this.props.onClearClick(e);
        }

        if (!e.isDefaultPrevented()) {
            this.props.onChange('', this.props, { source: 'clear' });
        }
    }
}

TextInput.contextTypes = {
    theme: React.PropTypes.string,
};

TextInput.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    autocomplete: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    hasClear: React.PropTypes.bool,
    onChange: React.PropTypes.func,
};

TextInput.defaultProps = {
    type: 'text',
    onChange() {},
};

export default TextInput;
