# Indent 4-to-2
Converts indentation from tab or 4 spaces into 2 spaces.

![Demostration of using this extension](https://raw.githubusercontent.com/compulim/vscode-indent-4to2/master/demo.gif)

## Usage
You can use both command palette or keyboard shortcuts to converts indentation. We recommend bind to keyboard shortcuts if you need to convert indentation frequently.

### Run with Command Palette

* Press `F1` or `Ctrl+Shift+P` for Command Palette
* Type or find "Convert indentation from tab or 4 spaces into 2 spaces"

### Binding to keyboard shortcuts

* File > Preferences > Keyboard Shortcuts
* Append the following into `keybindings.json`

```js
{
  "key": "ctrl+shift+2",
  "command": "4to2.convert4to2",
  "when": "editorFocus"
}
```

## Change log
* 0.1.2 (2016-02-09): Updated to use new API reference, technically `vscode^0.11.x`, to align with VS Code 0.10.8 (January 2016)

## Contributions
Love this extension? [Star](https://github.com/compulim/vscode-4to2/stargazers) us!

Want to make this extension even more awesome? [Send us your wish](https://github.com/compulim/vscode-4to2/issues/new/).

Hate how it is working? [File an issue](https://github.com/compulim/vscode-4to2/issues/new/) to us.
