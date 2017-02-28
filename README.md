# 📏 atom-auto-prettier

An Atom package that semantically reformats Javascript based on the window size. 

Powered by [prettier](https://github.com/prettier/prettier) and inspired by [refmt](https://facebook.github.io/reason/tools.html) for Reason.

## 🎥 Demo 

### Without auto-prettier:

Notice how Atom simply breaks lines at whitespace characters:

![screenshot](http://g.recordit.co/crI712NXmx.gif)

### With auto-prettier:

Notice how prettier breaks lines at Javascript-specific boundaries, such as blocks, object properties, and function arguments:

![screenshot](http://g.recordit.co/Q7cyk3wk5r.gif)

## 💾 Install

### Depends on [atom-prettier](https://github.com/jlongster/prettier-atom). 

Install both **atom-prettier-atom** and **atom-auto-prettier** via Atom's [Install view](http://flight-manual.atom.io/using-atom/sections/atom-packages/#atom-packages) or via [apm](http://flight-manual.atom.io/using-atom/sections/atom-packages/#command-line):

```
apm install atom-auto-prettier prettier-atom
```

## 💻 Usage

Use Atom's [command palette](http://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette) to toggle auto-prettier on/off or use the <kbd>CTRL+ALT+SHIFT+F</kbd> shortcut.

## 👍 Contributing

See the Atom [contributing guidelines](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)

### Workflow

* Fork this repo
* Clone your fork
  * `git clone https://github.com/[YOUR_NAME]/atom-auto-prettier.git && cd atom-auto-prettier`
* Install dependencies
  * `npm install`
* Link your repo (which installs this local version of the package and allows you to test changes in Atom)
  * `apm link`
* Reload Atom to test changes
  * Atom Command Palette > "Window: Reload"
* Submit a pull request!
