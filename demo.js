this.props.navigation.navigate('Demo', { name: 'John' })

class DemoScreen extends Component {
  updateName = () => {
    this.props.navigation.setParams({name: 'Johhnn'})
  };

  saveProfile = () => {
      this.props.navigation.goBack();
  }

  render() {
    const { name, email } = this.props.navigation.state.params
  }
}
