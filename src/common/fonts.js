import { Text } from 'react-native';
import { COLOR_PALETTE } from '../Colors/Color';
import React from 'react';
import { scale } from 'react-native-size-matters';

export const Heading = ({ children, style }) => {
    return children ? (
        <Text
            style={[
                {
                    fontSize: scale(16),
                    fontFamily: 'Manrope-Medium',
                    color: 'white'
                },
                style ? { ...style } : {},
            ]}>
            {children}
        </Text>
    ) : null;
};




export const SubHeading = ({ children, style }) => {
    return (
        <Text style={[{
            fontSize: scale(14),
            fontFamily: '',
            color: 'white'
        }, { ...style }]}

        >
            {children}
        </Text>
    )
};



export const Body = ({ children, style }) => {
    return (
        <Text style={[{
            fontSize: scale(12),
            fontFamily: '',
            color: 'black'
        }, { ...style }]}>
            {children}
        </Text>
    )
};

export const SubBody = ({ children, style }) => {
    return (
        <Text style={[{
            fontSize: scale(10),
            fontFamily: '',
            color: 'black'
        }, { ...style }]}>
            {children}
        </Text>
    )
};










































