import React ,{ Component }from 'react';
class AlertEditInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.value || ''
    }
  }

  handleSubmit(event){
      const text = event.target.value.trim()
      if (event.which === 13){
          this.props.save(text)
      }
    }

  handleChange(event) {
    this.setState({ text: event.target.value })
    }

  handleBlur(event){
      this.props.save(event.target.value.trim())
    }

    render(){
      return (
        <div className="col-md-12 editAlert">
            <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleSubmit.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            autoFocus="true"
            />
        </div>
    )
  }
}

export default AlertEditInput
