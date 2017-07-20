import React from 'react';
import { StackNavigator } from 'react-navigation';
import TemplateScreen from './components/TemplateScreen';

export const MainStack = StackNavigator({
  
  TemplateScreen: {
    screen: TemplateScreen
  },
}, {
  
});

