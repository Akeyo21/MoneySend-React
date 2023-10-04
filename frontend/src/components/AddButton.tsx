import React from 'react';
import CTAButton from './CTAButton';

type props = {
  buttonText: string;
  onPress: () => void;
};
const AddButton = ({buttonText, onPress}: props) => {
  return <CTAButton buttonText={buttonText} onPress={onPress} iconName="add" />;
};

export default AddButton;
