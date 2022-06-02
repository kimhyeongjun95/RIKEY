import styled from "styled-components";
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { NativeBaseProvider, Select, Center, Box, CheckIcon } from "native-base";
import React, { useState } from "react";
import Logo from '../assets/images/RIKEY_LOGO.png'
import API from "../api/API";
import { useStore } from "../states";

const SignUp = ({ route, navigation }) => {
		const [nickName, setNickName] = useState('');
		const [intro, setIntro] = useState('');
		const [area, setArea] = useState('');
		const [height, setHeight] = useState('');
		const [weight, setWeight] = useState('');
		
		const { setUserId, setUserNickName, setUserArea } = useStore();

		const id = route.params.id;

		const RIKEYSignUp = async () => {
			try {
				const response = await API.post('users', {
					"area" : area,
					"authId" : id,
					"greeting" : intro,
					"nickName" : nickName,
					"height" : height,
					"weight" : weight,
				})
				setUserId(response.data.profile.id);
				setUserNickName(response.data.profile.nickName);
				setUserArea(response.data.profile.area.name)
				navigation.navigate('Tabs')
			} catch (e) {
				alert("이미 사용 중인 닉네임입니다!")
				console.warn(e);
			}
		}

    return (
			<ScrollView>
				<KeyboardAvoidingView>
					<Container>

							<NativeBaseProvider>
								<InnerContainer>

									<LogoContainer>
										<LogoImg source={Logo} />
									</LogoContainer>

									<InnerFlex>

										<SignUpContainer>
											<SignUpText>{"닉네임을 입력해 주세요." }</SignUpText>
											<SignUpInput onChangeText={text => setNickName(text)}/>
										</SignUpContainer>

										<SignUpContainer>
											<SignUpText>{"소개말을 입력해 주세요."}</SignUpText>
											<SignUpInput onChangeText={text => setIntro(text)}/>
										</SignUpContainer>

										<SignUpContainer>
											<SignUpText>{"키를 입력해 주세요."}</SignUpText>
											<HeightInput onChangeText={text => setHeight(text)} />
										</SignUpContainer>

										<SignUpContainer>
											<SignUpText>{"몸무게를 입력해 주세요."}</SignUpText>
											<WeightInput onChangeText={text => setWeight(text)} />
										</SignUpContainer>

										<SignUpContainer>
											<SignUpText>{"지역을 선택해 주세요."}</SignUpText>
											<Center>
												<Box w="3/4" maxW="200">

													<Select selectedValue={area} minWidth="120" height="50" marginTop="5%" borderaccessibilityLabel="지역" placeholder="지역" 
													_selectedItem={{
														bg: "teal.600",
														endIcon: <CheckIcon size="5" />
													}} mt={1} onValueChange={itemValue => setArea(itemValue)}>
														
														<Select.Item label="경기" value="GYEONGGI" />
														<Select.Item label="경남" value="GYEONGNAM" />
														<Select.Item label="경북" value="GYEONGBUK" />
														<Select.Item label="광주" value="GWANGJU" />
														<Select.Item label="대구" value="DAEGU" />
														<Select.Item label="대전" value="DAEJEON" />
														<Select.Item label="부산" value="BUSAN" />
														<Select.Item label="서울" value="SEOUL" />
														<Select.Item label="세종" value="SEJONG" />
														<Select.Item label="울산" value="ULSAN" />
														<Select.Item label="인천" value="INCHEON" />
														<Select.Item label="전남" value="JEONNAM" />
														<Select.Item label="전북" value="JEONBUK" />
														<Select.Item label="제주" value="JEJU" />
														<Select.Item label="충남" value="CHUNGNAM" />
														<Select.Item label="충북" value="CHUNGBUK" />

													</Select>
												</Box>
											</Center>   
										</SignUpContainer>
										
										<ButtonContainer>
											<SignUpButton title="회원가입 하기" color="#00C689" onPress={() => RIKEYSignUp()}/>
										</ButtonContainer>

									</InnerFlex>
								</InnerContainer>

							</NativeBaseProvider>
					</Container>
				</KeyboardAvoidingView>
			</ScrollView>
    )
	}
	
	{/* {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />} */}
export default SignUp;

const Container = styled.View`
	flex: 1;
	width:100%;
	height: 100%;
	justify-content : center;
	align-items: center;
`
const InnerContainer = styled.View`
	flex: 1;
	width:100%;
	height: 70%;
	justify-content : center;
	align-items: center;
`

const LogoContainer = styled.View`
	flex: 0.45;
`

const LogoImg = styled.Image`
	flex: 1;
	width: 300px;
	height: 150px;
	left: 5%;
`

const InnerFlex = styled.View`
	flex: 3;
	justify-content: center;
	align-items: center;
	margin-bottom: 5%;
	width: 1000px;
`

const SignUpContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top:2%;
`

const SignUpText = styled.Text`
	font-weight: bold;
	color: black;
`

const SignUpInput = styled.TextInput`
	margin-top: 1%;
	width: 200px;
	height: 35px;
 	border: 0.5px solid;
	border-radius: 6px;
	color: black;
`

const HeightInput = styled.TextInput`
	margin-top: 1%;
	width: 200px;
	height: 35px;
	border: 0.5px solid;
	border-radius: 6px;
	color: black;
`
const WeightInput = styled.TextInput`
	margin-top: 1%;
	width: 200px;
	height: 35px;
	border: 0.5px solid;
	border-radius: 6px;
	color: black;
`

const ButtonContainer = styled.View`
	margin-top: 15%;
	bottom: 14%;
	width: 20%;
`

const SignUpButton = styled.Button`
`