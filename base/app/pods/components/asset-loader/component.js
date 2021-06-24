import Component from '@glimmer/component';
import { action } from '@ember/object';
import { dropTask } from 'ember-concurrency';

export default class AssetLoaderComponent extends Component {
  @dropTask
  *importAssets(element) {
    yield Promise.all([
      this.loadScript('/vue/js/chunk-vendors.js'),
      this.loadScript('/vue/js/app.js'),
      this.loadScript('/vue/js/about.js'),
      this.loadCss(`/vue/css/app.css`),
    ]);

    const vueApp = element.querySelector('#vue-app');
    if (window.renderVueApp) {
      window.renderVueApp(vueApp);
    }
  }

  @action
  loadCss(url) {
    const element = document.querySelector(`[href="${url}"]`);
    if (element) { return; }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    document.body.appendChild(link);
  }

  @action
  loadScript(url) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(`[src="${url}"]`);
      if (element) { resolve(); }

      const script = document.createElement('script');
      script.type = 'module';
      script.src = url;

      if (script.readyState) {
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null;
            resolve();
          }
        };
      } else {
        script.onload = () => {
          resolve();
        };

        script.onerror = () => {
          reject();
        };
      }

      document.body.appendChild(script);
    });
  }
}
