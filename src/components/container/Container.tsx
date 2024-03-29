import React, { FC, Fragment } from "react";
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { styles } from "./Container.style";
import { Header } from '../header/Header'
import { TContainer } from "./Container.type";
import { COLORS } from "../../assets/colors/colors";

export const Container: FC<TContainer> = ({
  children,
  isLoading = false,
  safeAreaStyle,
  containerStyle,
  contentStyle,
  isScrollViewDisabled = false,
  backgroundColor = COLORS.red ,
  isHeaderVisible = false,
  ...rest
})  => {
  const Container = isScrollViewDisabled ? View : ScrollView;

  const containerDynamicStyle = isScrollViewDisabled
    ? { style: [styles.container, containerStyle] }
    : { contentContainerStyle: containerStyle };

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.loading,
          safeAreaStyle,
        ]}
        {...rest}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <Fragment>
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        safeAreaStyle,
        {backgroundColor}
      ]}
    >
      {isHeaderVisible && <Header title={'Pokemon'}/>}
      <Container {...containerDynamicStyle} {...rest}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </Container>
    </SafeAreaView>
    <SafeAreaView style={{flex:0,backgroundColor:COLORS.white}}/>
  </Fragment>
  );
};
