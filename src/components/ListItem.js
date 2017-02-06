import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CardSection } from './common';
import * as selectionActions from '../actions/selectionActions';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { library, expanded } = this.props;

    const shouldUpdate = library !== nextProps.library
      || expanded !== nextProps.expanded;

    return shouldUpdate;
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  handleSelect() {
    this.props.actions.selectedLibrary(this.props.library.id);
  }

  renderDescription() {
    const { library, expanded } = this.props;

    return expanded ? (
      <CardSection>
        <Text style={styles.descriptionStyle}>{library.description}</Text>
      </CardSection>
    ) : null;
  }

  render() {
    const { title } = this.props.library;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={this.handleSelect}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  library: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  actions: PropTypes.shape().isRequired,
};

ListItem.defaultProps = {
  expanded: false,
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
};

function mapStateToProps(state, ownProps) {
  const expanded = ownProps.library.id === state.selectedLibraryId;
  return { expanded };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(selectionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
