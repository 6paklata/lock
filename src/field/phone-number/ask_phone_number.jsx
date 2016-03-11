import React from 'react';
import Screen from '../../lock/screen';
import PhoneNumberPane from './phone_number_pane';

import { renderAskLocation } from './ask_location';

import { cancelSelectPhoneLocation } from './actions';
import { selectingLocation } from './index';


export default class AskPhoneNumber extends Screen {

  constructor() {
    super("phone");
  }

  escHandler(lock) {
    return selectingLocation(lock) ? cancelSelectPhoneLocation : null;
  }

  renderAuxiliaryPane(lock) {
    return renderAskLocation(lock);
  }

  render({focusSubmit, model}) {
    return (
      <PhoneNumberPane
        focusSubmit={focusSubmit}
        lock={model}
        placeholder={this.t(model, ["phoneNumberInputPlaceholder"], {__textOnly: true})}
      />
    );
  }

}
