'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,
  enabled: false,
  resizing: null,
  preferredLineLength: atom.config.get(
    'editor.preferredLineLength'
  ),

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'auto-prettier:toggle': () => this.toggle()
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    window.onresize = this.enabled
      ? null
      : window.onresize = this.handleResize.bind(this);
    this.enabled = !this.enabled;
  },

  handleResize(event) {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor && editor.getFileName().includes('.js')) {
      const { width } = editor;
      const lineLength = Math.ceil(width / 8);
      if (lineLength <= this.preferredLineLength) {
        if (this.resizing) clearTimeout(this.resizing);
        this.resizing = setTimeout(
          () => {
            atom.config.set(
              'prettier-atom.printWidth',
              lineLength
            );
            atom.commands.dispatch(
              atom.views.getView(editor),
              'prettier:format'
            );
            this.resizing = null;
          },
          60
        );
      } else if (
        atom.config.get('prettier-atom.printWidth') !==
        this.preferredLineLength
      ) {
        atom.config.set(
          'prettier-atom.printWidth',
          this.preferredLineLength
        );
        atom.commands.dispatch(
          atom.views.getView(editor),
          'prettier:format'
        );
      }
    }
  }
};
