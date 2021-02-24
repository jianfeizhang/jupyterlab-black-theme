import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @jianfeizhang/jupyterlab-black-theme-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@jianfeizhang/jupyterlab-black-theme-extension',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @jianfeizhang/jupyterlab-black-theme-extension is activated!');
    const style = '@jianfeizhang/jupyterlab-black-theme-extension/index.css';

    manager.register({
      name: '@jianfeizhang/jupyterlab-black-theme-extension',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
