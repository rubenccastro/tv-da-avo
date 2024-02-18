import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import YoutubeIframe from 'react-native-youtube-iframe';

const Oracaomana = () => {
    function setOrientation() {
        if (Dimensions.get('window').height > Dimensions.get('window').width) {
            // Device is in portrait mode, rotate to landscape mode.
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            // Device is in landscape mode, rotate to portrait mode.
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }
    return (
        <View style={styles.container}>
            <YoutubeIframe
                play={true}
                videoId={'1Vd3Y_1jg44'}
                width={400}
                height={300}
                webViewProps={{
                    allowsFullscreenVideo: true,
                    allowsInlineMediaPlayback: true,
                    mediaPlaybackRequiresUserAction: false,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Oracaomana;
