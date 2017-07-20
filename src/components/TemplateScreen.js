import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { templateAction } from '../actions';
import { viewStyles } from '../styles';

class TemplateScreen extends Component { 

  render () {

    const { container, centerVertical, centerHorizontal } = viewStyles;

    return (
      <View style={container, centerVertical, centerHorizontal}>
        <Text>
          React Native Template
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ templateStore }) => {
  const {
    templateField
  } = templateStore;

  return { 
    templateField
  };
};

export default connect( mapStateToProps , { templateAction })(TemplateScreen);
