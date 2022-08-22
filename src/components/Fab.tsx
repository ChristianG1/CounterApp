import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                style={[styles.fabLocation,
                position === 'br'
                    ?
                    styles.rigth : styles.left
                ]}
                onPress={onPress}
            >

                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )

    }

    const android = () => {
        return (
            <View style={[styles.fabLocation,
            position === 'br'
                ?
                styles.rigth : styles.left
            ]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}

                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )

    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        fontSize: 25,
        color: "#FFF",
        fontWeight: "bold"
    },
    fabLocation: {
        position: "absolute",
        bottom: 25,
    },
    rigth: {
        right: 25
    },
    left: {
        left: 25
    }
})
