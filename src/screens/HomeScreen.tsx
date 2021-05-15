import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import {
  Show,
  useAddPaymentMethodMutation,
  useGetShowsQuery,
} from '../generated/graphql';
import globalStyles from '../utils/globalStyles';

interface ListProps {
  item: Show | any;
  index: number;
}

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    data: showData,
    error: showError,
    loading: isShowsLoading,
  } = useGetShowsQuery();

  useEffect(() => {
    if (showError) return Alert.alert(showError.message);
  }, [showError]);

  //Add Payment Method
  const [
    addPaymentMethod,
    {
      data: paymentMethodData,
      error: paymentMethodError,
      loading: isPaymentMethodLoading,
    },
  ] = useAddPaymentMethodMutation({
    variables: {
      paymentMethod: {
        cardName: text,
        cardToken: '', //generate from backend
      },
    },
  });

  useEffect(() => {
    if (showError) return Alert.alert(showError.message);
    if (paymentMethodData?.addPaymentMethod.cardName) {
      Alert.alert(
        `Card ${paymentMethodData?.addPaymentMethod.cardName} is added successfully!`,
      );
    }
  }, [paymentMethodData, paymentMethodError]);

  console.log({showData, paymentMethodData});

  const renderItem = ({item}: ListProps) => {
    return (
      <View style={{margin: 16}}>
        <Text>{item.title}</Text>
        <Text>{item.start_date}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {isShowsLoading || isPaymentMethodLoading ? (
        <ActivityIndicator
          style={globalStyles.loader}
          color="blue"
          size="large"
        />
      ) : null}
      <FlatList
        contentContainerStyle={globalStyles.container}
        data={showData?.shows || []}
        renderItem={renderItem}
      />

      <Button title="Add New Card" onPress={() => setIsModalVisible(true)} />

      <Modal visible={isModalVisible}>
        <TextInput
          style={globalStyles.input}
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button
          title="Add Card"
          onPress={() => {
            addPaymentMethod();
            setIsModalVisible(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
