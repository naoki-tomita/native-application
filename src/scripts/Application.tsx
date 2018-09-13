import React from "react";
import styled from "styled-components/native";

const View = styled.View`
  background-color: #231;
`;

const Text = styled.Text`
  color: #fff;
`;

const Button = styled.Button``;

export class Application extends React.Component {
  render() {
    return (
      <View>
        <Text>fooooooo</Text>
        <Button title="Hello world" onPress={this.handlePress} />
      </View>
    );
  }

  handlePress = () => {
    alert("hello world");
  };
}
