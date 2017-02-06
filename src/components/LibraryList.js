import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
    };
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    const dataSource = ds.cloneWithRows(this.props.libraries);

    this.setState({ dataSource });
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

LibraryList.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

function mapStateToProps(state) {
  return {
    libraries: state.libraries,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// }

export default connect(mapStateToProps)(LibraryList);
