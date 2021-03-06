# Changelog

## Unreleased

## 0.12.1 - 2016-08-01

### Fixed

- Select: prevent internal Button from form submission ([#91](https://github.com/narqo/react-islands/pull/91)).

## 0.12.0 - 2016-07-28

### Added

- Link: add `view` prop ([#89](https://github.com/narqo/react-islands/pull/89)).

## 0.11.1 - 2016-07-28

### Fixed

- Menu: Fix value validation in `mode=radio` ([#87](https://github.com/narqo/react-islands/pull/87)).

## 0.11.0 - 2016-07-25

### Added

- Control: pass `this.props` as a second argument to `onFocusChange()` and `onHoverChange()` handlers ([#84](https://github.com/narqo/react-islands/pull/84)), ([#86](https://github.com/narqo/react-islands/pull/86)).
- TextInput: support for `autocomplete` property ([#85](https://github.com/narqo/react-islands/pull/85)).

## 0.10.0 - 2016-07-24

### Added

- pressable: Add "displayName" to wrapped class ([#82](https://github.com/narqo/react-islands/pull/82)).

### Fixed

- `generate-main` script doesn't work on Linux ([#80](https://github.com/narqo/react-islands/pull/80)).
- Overlay: `layerWillBecomeHidden()` and `releaseZIndex()` must be idempotent ([#81](https://github.com/narqo/react-islands/pull/81)).

## 0.9.0 - 2016-07-20

### Added

- MenuItem: support for `type` property ([#75](https://github.com/narqo/react-islands/pull/75)).

## 0.8.0 - 2016-07-17

### Added

- Button: support for `title` property ([#74](https://github.com/narqo/react-islands/pull/74)).

## 0.7.1 - 2016-07-16

### Fixed

- Control: `textValue()` doesn't play nice with numbers ([#73](https://github.com/narqo/react-islands/pull/73)).
- Select: menu must not be narrower than button ([#71](https://github.com/narqo/react-islands/pull/71)).

### Other

- Add tests for Control.
- Add Select with `_width_available` CSS class example.

## 0.7.0 - 2016-07-03

### Added

- Add a `pre-commit` hook to automatically lint the code before commit ([#70](https://github.com/narqo/react-islands/pull/70)).
- Reduce the overall production size of the module by applying some Babel magic ([#69](https://github.com/narqo/react-islands/pull/69)).

## 0.6.0 - 2016-06-29

### Changed

* Got rid of own states that represented "value" of components:
  - Checkbox, CheckboxGroup: Make components stateless ([#64](https://github.com/narqo/react-islands/pull/64)).
  - Radio, RadioGroup: make components stateless ([#66](https://github.com/narqo/react-islands/pull/66)).
  - TextInput, TextArea: make components stateless ([#67](https://github.com/narqo/react-islands/pull/67)).

### Fixed

* Select: Fit popup into viewport ([#65](https://github.com/narqo/react-islands/pull/65)).

## 0.5.0 - 2016-06-09

### Added

* Components can be imported as a named modules from the package main entrypoint ([#62](https://github.com/narqo/react-islands/pull/62)).

### Changed

* Link, Button: synthetic event is passed as a first argument to the `onClick()` handler ([#61](https://github.com/narqo/react-islands/pull/61)).

### Fixed

* Link, Button: `onClick()` handler must be called only on left button click ([#61](https://github.com/narqo/react-islands/pull/61)).
* Link, Button: Impossible to do a default prevention in `onClick()` handler ([#61](https://github.com/narqo/react-islands/pull/61)).

## 0.4.0 - 2016-06-06

### Added

* New ProgressBar component ([#58](https://github.com/narqo/react-islands/pull/58)).
* New Spinner component ([#57](https://github.com/narqo/react-islands/pull/57)).

## 0.3.1 - 2016-06-05

### Fixed

* Button: pass "type" prop to underlying <button> ([#54](https://github.com/narqo/react-islands/issues/54)).

## 0.3.0 - 2016-06-03

### Added

* Select: add protected method `renderButtonText()` ([#52](https://github.com/narqo/react-islands/issues/47)).
* Link: add unit-tests ([#53](https://github.com/narqo/react-islands/pull/53)).
* Start using [chai-enzyme](https://www.npmjs.com/package/chai-enzyme) for unit-tests.

### Changed

* [warning](https://www.npmjs.com/package/warning) was updated to 3.0.0.

### Fixed

* Link: fix type declaration for "type" prop.

## 0.2.0 - 2016-05-29

### Fixed

* Add missing "key" props ([#47](https://github.com/narqo/react-islands/issues/47)).
* Nothing works in IE 11 ([#45](https://github.com/narqo/react-islands/issues/45)).

### Other

* Fix project license.
* Update readme.

## 0.1.0 - 2016-05-26

* Initial public release.
