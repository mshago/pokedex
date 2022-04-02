import React, {Component} from "react";
import {StyleSheet, StatusBar, View, Platform} from "react-native";

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarPlaceHolder = _ => {
    return (
        <View style={{
            width: "100%",
            height: STATUS_BAR_HEIGHT,
            backgroundColor: "blue"
        }}>
            <StatusBar
                barStyle="light-content"
            />
        </View>
    );
}