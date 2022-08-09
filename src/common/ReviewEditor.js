import React, { Component } from 'react';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import PropTypes from 'prop-types';
import "draft-js/dist/Draft.css"
import './ReviewEditor.css';


export default class ReviewEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const { content } = this.props;

    if(content)
      this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    else
      this.state.editorState = EditorState.createEmpty();

    this.focus = () => {
      this.refs.editor.focus();
    }

    this.onChange = (editorState) => {
      const contentState = editorState.getCurrentContent();
      this.props.onContentChange(convertToRaw(contentState));
      this.setState({ editorState });
    }

    this.handleKeyCommand = (command) => {
      const { editorState } = this.state;
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return true;
      }

      return false;
    }

    this.onTab = (e) => {
      const maxDepth = 4;
      this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    this.toggleBlockType = (type) => {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          type
        )
      );
    }

    this.toggleInlineStyle = (style) => 
    {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          style
        )
      );
    }
  }

  render() {
    const { editorState } = this.state;

    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">        
        <StyleControls
          editorState={editorState}
          onToggleBlock={this.toggleBlockType}
          onToggleStyle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Please describe what you liked or disliked about this game and whether you recommend it to others."
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}


function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}


class StyleButton extends React.Component {
  constructor() {
    super();

    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    var className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    var imgPath = "images/review_toolbar_" + this.props.label + ".svg";

    return (      
      <span className={className} onMouseDown={this.onToggle}>
        <img src={imgPath} width='40px'/>
      </span>
    );
  }
}


const STYLE_TYPES = [
  { label: 'title', style: 'header-one', isBlock: true },
  { label: 'quote', style: 'blockquote', isBlock: true },
  { label: 'list', style: 'unordered-list-item', isBlock: true },
  { label: 'bold', style: 'BOLD', isBlock: false },
  { label: 'italic', style: 'ITALIC', isBlock: false },
  { label: 'underline', style: 'UNDERLINE', isBlock: false },
];

const StyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  var currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {STYLE_TYPES.map((type) =>
        type.isBlock
          ?
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggleBlock}
            style={type.style}
          />
          : 
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggleStyle}
            style={type.style}
          />
      )}
    </div>
  );
};
