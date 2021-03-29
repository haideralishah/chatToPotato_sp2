
import React from "react";
import {
    Image,
    View
} from 'react-native';
const FlagImgs = ({ ...props }) => {
    return (
        <View style={{
            marginTop: props.marginTop == 0 ? props.marginTop : "5%",
        }}>
            <Image
                source={props.imgPath}
                style={{
                    height: props.height,
                    width: props.width,
                    borderRadius: props.borderRadius == 0 ? props.borderRadius : 50
                }}
            />
        </View>
    );
};
export default FlagImgs;
