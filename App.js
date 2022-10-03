/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import styled from '@emotion/native';

import { Text } from './components';
import LottieView from 'lottie-react-native';

import { colors } from './components/styles.js';
import { strings, timeLineData } from './components/strings.js';
import Button from './components/button.js';
import TimeLine from './components/timeLineComponent/timeLine.js';

import eyes from './assets/eyes.json';

const App: () => Node = () => {
    const backgroundStyle = {
        flex: 1,
        backgroundColor: colors.background,
    };

    const renderHeader = () => (
        <Header>
            <Text
                fontSize="extraLarge"
                textAlign="center"
                color="mainOrange"
                style={styles.bold}>
                {'Test Fidme\nReact Native'}
            </Text>
            <Text textAlign="center" style={styles.headerText}>
                {'Reproduce fidme\'s "Account Deletion" screen'}
            </Text>
        </Header>
    );

    const renderAnimation = () => (
        <LottieView autoPlay loop source={eyes} style={{ width: 110 }} />
    );

    const [deleting, setDeleting] = useState(false);

    const renderContentHeader = () => (
        <Text>
            {strings.contentHeader}
        </Text>
    );

    const renderTimeLine = () => (
        <TimeLine margin='defaultMargin' lineColor='midBlue' data={timeLineData}></TimeLine>
    );

    const renderDeleting = () => (
        <DeletingView>
            <Text>
                {strings.deletingText}
            </Text>
        </DeletingView>
    )

    const renderContentFooter = () => (
        <Text>
            {strings.contentFooter}
        </Text>
    );

    const renderBottom = () => (
        <ContentButton>
          <Button
              title={deleting ? strings.cancelButton : strings.deleteButton} onPress={ () => setDeleting(!deleting) }>
          </Button>
        </ContentButton>
    );

    const renderContent = () => (
        <Content>
            {renderAnimation()}
            {renderContentHeader()}
            {deleting ? renderDeleting() : renderTimeLine()}
            {renderContentFooter()}
            {renderBottom()}
        </Content>
    );

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                {renderHeader()}
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    headerText: {
        color: '#CCC',
        marginTop: 10,
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#CCC',
    },
});

const Header = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CCC',
});

const Content = styled.View({
    paddingHorizontal: 20,
});

const ContentButton = styled.View({
      alignSelf: 'center',
      marginVertical: 20,
});

const DeletingView = styled.View({
        margin: 20,
        AlignSelf: 'center',
});

export default App;
