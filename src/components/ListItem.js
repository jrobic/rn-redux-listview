import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { title } = this.props.library;
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>{title}</Text>
      </CardSection>
    );
  }
}

ListItem.propTypes = {
  library: PropTypes.shape().isRequired,
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
