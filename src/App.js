

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet'

export default () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <BottomSheet
                snapPoints={[450, 300, 50]}
                renderHeader={() => <View style={{ backgroundColor: 'blue' }}><Text>Header</Text></View>}
                renderContent={() => <View style={{ backgroundColor: 'blue' }}><Text>Header</Text></View>}
            />
        </View>
    );

}

