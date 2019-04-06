import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// TODO: dynamic injection
import SkinDefault from './default';
import SkinBubbleGum from './bubble-gum';

// map state to props
export default function SkinProvider (name) {
  let skin;

  switch (name) {
  case 'auto':
    skin = SkinBubbleGum;
    break;
  default:
    skin = SkinDefault;
  }

  return skin;
}
