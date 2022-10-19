import React = require("react");

import falafel from "./falafel";
import LoopInserter from "./loop-inserter";
import makeImplicitSketch from "./implicit-sketch";
import PureComponent from "./pure-component";
import * as PreviewFrame from "./preview-frame-interface";

const LOOP_CHECK_FUNC_NAME = '__loopCheck';

interface Props {
  p5version: string,
  width: number,
  content: string,
  baseSketchURL: string,
  timestamp: number,
  onError: PreviewFrame.ErrorReporter
}

interface State {

}

export default class Preview extends PureComponent<Props, State> {
  _iframe: HTMLIFrameElement

  resetIframe() {
    let content = this.props.content;

    content = makeImplicitSketch(content);

    try {
      content = falafel(content, {}, LoopInserter(function(node) {
        return LOOP_CHECK_FUNC_NAME + "(" +
               JSON.stringify(node.range) + ");";
      })).toString();
    } catch (e) {
      // There's almost definitely a syntax error in the user's code;
      // just leave it unmangled and let the preview frame bubble up
      // the error.
    }

    if (this._iframe) {
      this._iframe.parentNode.removeChild(this._iframe);
      this._iframe = null;
    }
    let iframe = document.createElement('iframe');

    iframe.setAttribute('src', 'preview-frame.html');
    iframe.setAttribute('width', this.props.width.toString());
    iframe.addEventListener('load', () => {
      // Note that this should never be called if we're already unmounted,
      // since that means the iframe will have been removed from the DOM,
      // in which case it shouldn't be emitting events anymore.
      let frame = iframe.contentWindow as PreviewFrame.Runner;
      frame.startSketch(content, this.props.p5version, 1000,
                        LOOP_CHECK_FUNC_NAME,
                        this.props.baseSketchURL,
                        this.props.onError);
    });
    this.refs.container.appendChild(iframe);
    this._iframe = iframe;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.timestamp !== this.props.timestamp) {
      this.resetIframe();
    }
  }

  componentDidMount() {
    this.resetIframe();
  }

  componentWillUnmount() {
    this._iframe = null;
  }

  refs: {
    [key: string]: (Element)
    container: HTMLDivElement
  }

  render() {
    return <div ref="container" className="preview-holder"></div>;
  }
}
