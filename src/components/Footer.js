import React, { Component } from 'react'
import { connect } from 'react-redux';

class Footer extends Component {

  // state = {
  //   margin: '2em'
  // }
  //
  // componentDidMount() {
  //   this.getMargin()
  // }
  //
  // getMargin = () => {
  //   console.log(this.props.tasks.length)
  //   if (this.props.tasks.length < 10) {
  //     // console.log('less than 14')
  //     this.setState({margin: '14em'})
  //   } else if (this.props.tasks.length > 10) {
  //     console.log('should be 2')
  //     this.setState({margin: '2em'})
  //   }
  // }

  render() {
    return(
      <nav class='footer'>
        <span style={{color:'#b9f4d6'}}>Made with ❤️ in Houston, TX.</span>
      </nav>
   );
  }
};

// const mapStateToProps = state => ({
//   tasks: state.tasks,
//   backlog: state.backlog
// })

export default connect(null)(Footer);
