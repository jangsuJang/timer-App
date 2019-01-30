import React from "react";
import PropTypes from "prop-types";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

// button을 사용하기위해 호출을 할때 iconName을 명시해야함
function Button({iconName, onPress}){
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={60} color="white"/>
        </TouchableOpacity>
    );
}

Button.propTypes= {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};
//iconName은 문자열이여야하며 필수 조건임 
//onPress는 함수여야 하며 필수조건임

/*
 TouchableOpacity는 눌렀을떄 아이콘의 투명도 변화가 있는것
 유사한 도구로 Touchable Highlight도 있음(더 밝아짐)
 Touchable Feedback : 버튼이 눌려도 아무변화없음
*/

export default Button;