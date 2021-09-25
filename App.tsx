import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppRoutes from './src/navigation/index';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: "100%"
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <AppRoutes/>
        </SafeAreaView>
    );
};

export default App;
