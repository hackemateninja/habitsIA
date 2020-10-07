import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../../constants';
import {TextInput} from 'react-native-gesture-handler';
import IconButton from '../../../components/IconButton';
import InputType from '../types/InputType';
import AuthStyles from '../styles/AuthStyles';

export default ({
  label,
  onChange,
  value,
  type,
  errorMessage,
  editable = true,
  placeholder,
  onEndEditing,
  maxLength,
  autofocus,
  clearText,
  onFocus,
}: InputType) => {
  const pass = type === 'password';

  const [focus, setFocus] = useState(false);
  const [showPass, setShowPass] = useState(pass);

  const handleFocus = () => {
    setFocus(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const icon = showPass ? 'ios-eye-off' : 'ios-eye';
  const capitalize = type === 'code' ? 'characters' : 'none';
  const placeHolderColor = COLORS.grey;

  const keyBoardType = () => {
    switch (type) {
      case 'password':
        return 'default';
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'code':
        return 'default';
      default:
        return 'default';
    }
  };

  const IconInput = () => {
    if (pass) {
      return (
        <View style={AuthStyles.inputIcon}>
          <IconButton
            onPress={() => setShowPass((prev) => !prev)}
            icon={icon}
            iconColor={COLORS.grey}
            size={20}
          />
        </View>
      );
    } else {
      return (
        <View style={AuthStyles.inputIcon}>
          <IconButton
            onPress={clearText}
            icon="md-close-circle"
            iconColor={!focus ? 'transparent' : COLORS.grey}
            size={18}
          />
        </View>
      );
    }
  };

  return (
    <>
      <Text style={AuthStyles.label}>{label}</Text>
      <View style={AuthStyles.inputContainer}>
        <TextInput
          allowFontScaling={true}
          autoCapitalize={capitalize}
          autoCorrect={false}
          autoCompleteType={'off'}
          autoFocus={autofocus || false}
          editable={editable}
          keyboardAppearance="dark"
          keyboardType={keyBoardType()}
          maxLength={maxLength}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={placeHolderColor}
          onEndEditing={onEndEditing}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={showPass}
          style={AuthStyles.input}
          textAlignVertical="center"
          value={value}
        />
        <IconInput />
      </View>
      <Text style={AuthStyles.inputErrorMessage}>{errorMessage}</Text>
    </>
  );
};
