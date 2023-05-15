import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function AppFooter({footertext1,footertext2,slogan}) {
    return (
        <View style={styles.container}>
            <Text sylte={styles.footer}>{footertext1} 
                <Text style={styles.text}>{footertext2}</Text>
            </Text>
            <Text style={styles.slogan}>{slogan} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.075,
        backgroundColor: 'fuchsia'
    },
    footer: {
        textAlign: 'auto',
    },
    text: {
        fontStyle: 'italic',
    },
    slogan: {
        fontStyle: 'italic',
    }
});
