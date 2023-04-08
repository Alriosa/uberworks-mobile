import React from 'react';
import {View, Text, Flex, VStack, Center, Input, Button} from 'native-base';

export const Login = () => {
  return (
    <VStack safeArea space={3} justifyContent={'center'} h={'full'}>
      <Flex flex={1} justifyContent={'center'}>
        <Center>
          <Text className="m-5" fontFamily={'mono'} fontSize={50} color={'#1B4965'}>
            Uber Works
          </Text>
        </Center>
      </Flex>
      <Flex flex={1}>
        <Center>
          <Input variant="rounded" m='5' placeholder="Email" w="90%" borderColor={'#1B4965'} focusOutlineColor={'#1B4965'}/>
          <Input variant="rounded" mb='5' placeholder="password" w="90%"  type='password' borderColor={'#1B4965'} focusOutlineColor={'#1B4965'}/>
          <Button mb='5' w="90%" bg={'#1B4965'}> Login </Button>
          <Button mb='5' w="80%" variant={'ghost'}> Sing up  </Button>
          <Button mb='5' w="70%" variant={'ghost'}> Forgot password </Button>
        </Center>
      </Flex>
    </VStack>
  );
};
