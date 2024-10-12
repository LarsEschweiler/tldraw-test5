import { render } from 'preact'
import { App } from './app.tsx'

import { StyleSheetManager } from 'styled-components';



class ContentCardExample extends HTMLElement {
  content: HTMLDivElement | null = null;
  config: { entity?: string } | null = null;

  set hass(hass: unknown | undefined) {
    // store.setState({ hass });
    console.log('hass', hass)
    this._render();
  }

  setConfig(config: any) {
    // store.setState({ config });
    console.log('config', config)
    this._render();
  }


  private _render = () => {
    render(
      (
        <StyleSheetManager target={this}>
          { /* @ts-ignore */ }
          <ha-card>
            <App />
            { /* @ts-ignore */ }
          </ha-card>
        </StyleSheetManager>
      ), this,
    );
  };


 
    // const stateStr = state ? state.state : "unavailable";

    // this.content.innerHTML = `
    //   The state of ${entityId} is ${stateStr}!
    //   <br><br>
    //   <img src="http://via.placeholder.com/350x150">
    // `;


  


  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns in masonry view
  getCardSize() {
    return 1;
  }

  // // The rules for your card for sizing your card if the grid in section view
  // getLayoutOptions() {
  //   return {
  //     grid_rows: 3,
  //     grid_columns: 2,
  //     grid_min_rows: 3,
  //     grid_max_rows: 3,
  //   };
  // }
}

customElements.define("content-card-example3", ContentCardExample);


declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    customCards?: any[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'boilerplate-card',
  name: 'Boilerplate Card',
  preview: false,
  description: 'Boilerplate Card x React',
});