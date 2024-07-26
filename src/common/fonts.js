import { Text } from 'react-native';
import { COLOR_PALETTE } from '../Colors/Color';
import React from 'react';
import { scale } from 'react-native-size-matters';
import { COLORS, FONTFAMILY } from '../theme/theme';

export const Heading = ({ children, style }) => {
    return children ? (
        <Text
            style={[
                {
                    fontSize: scale(16),
                    fontFamily: FONTFAMILY.AmazonEmber_bold,
                    color: COLORS.primary
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
            fontFamily: FONTFAMILY.Amazon_Medium,
            color: COLORS.black
        },
        style ? { ...style } : {},
        ]}

        >
            {children}
        </Text>
    )
};



export const Body = ({ children, style }) => {
    return (
        <Text style={[{
            fontSize: scale(12),
            fontFamily: FONTFAMILY.AmazonEmber_regular,
            color: COLORS.primary
        },
        style ? { ...style } : {},
        ]}>
            {children}
        </Text>
    )
};

export const SubBody = ({ children, style }) => {
    return (
        <Text style={[{
            fontSize: scale(10),
            fontFamily: FONTFAMILY.AmazonEmber_light,
            color: 'black'
        }, style ? { ...style } : {},]}>
            {children}
        </Text>
    )
};










































