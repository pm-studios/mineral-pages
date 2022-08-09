import React,  { PureComponent }  from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


const modalRoot = document.getElementById('root')

export default class Overlay extends PureComponent {

  static propTypes = {
    children: PropTypes.node
  }


  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}