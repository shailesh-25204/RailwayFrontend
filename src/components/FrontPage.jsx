import { useState } from "react";
import TrainDataService from '../services/trainServices'
import { Switch, Route, Navigate, withRouter, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Select,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CalendarIcon, Search2Icon } from "@chakra-ui/icons";
// import "./FrontPage.scss";
// import bg from "../assets/bgimg.webp";

import {
  Box,
  Input,
  List,
  ListItem,
  ListIcon,
  Text,
  Flex,
  Icon,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import img1 from "../assets/Trainbg.jpg";

const FrontPage = (getTrains) => {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState();
  const [seatClass, setSeatClass] = useState();
  const [trains, setTrains] = useState({});
  const [loadFront, setLoadFront] = useState(true)

  const [trainObj, setTrainObj] = useState(null);
  const navigate = useNavigate();

  const obj = {
    source: source,
    destination: dest,
    date: date,
    seatClass: seatClass,
  };
  const obj2 = {
    params : obj
  }

  const submitHandler = (e) => {
    e.preventDefault();

    // TrainDataService.post('/api/train/getTrain', obj)
    //   .then(res => {
    //     setTrains(res.data);
    //     console.log((res.data));
    //     let newTrains = res.data
    //     // console.log(trains)
      navigate('/TrainDetails', { state: obj2 })
      // })
      // .catch(err => console.log(err))
  };


  return (
    (loadFront) ? <Box w={"container.xl"} h={"100vh"} bgImage={img1} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center'}>
      <Box w={"60%"}  m={'0 auto'} h={'100vh'}>
        
        <form onSubmit={submitHandler}>
          <VStack w={"100%"} h={'100vh'} gap={"0.7rem"} justifyContent={'center'} alignItems={'center'} >
            <HStack w={'100%'} >
            <Heading
          style={{
            fontSize: "3rem",
            textAlign: "center",
            fontWeight: "900",
            color: "#bbb",
            textShadow: "3px 3px 3px blue",
          }}
          margin={'3rem auto'}
        >
          Welcome to SGGS Railways
        </Heading>
            </HStack>
            <HStack w={"100%"}>
              <Input
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
                w={"100%"}
                p={"30px"}
                borderTopLeftRadius={"20px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                placeholder="From"
                fontSize={"1.2rem"}
                css={{
                  outline: "none",
                  opacity: '0.9'
                }}
                required
              />

              <Input
                w={"100%"}
                p={"30px"}
                value={dest}
                borderTopRightRadius={"20px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                placeholder="To"
                fontSize={"1.2rem"}
                onChange={(e) => {
                  setDest(e.target.value);
                }}
                css={{
                  outline: "none",
                  opacity: '0.9'
                }}
                required

              />
            </HStack>
            <HStack w={"100%"}>
              <Input
                w={"100%"}
                p={"30px"}
                type="date"
                // borderBottomLeftRadius={"12px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                fontSize={"1.2rem"}
                css={{
                  outline: "none",
                  opacity: '0.9'
                }}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
                value={date}
                required
              />
              
            </HStack>

            <HStack w={"100%"}>
              <Button
                w={"100%"}
                p={"30px"}
                type="submit"
                // borderRadius={"12px"}
                
                borderBottomLeftRadius={'20px'}
                borderBottomRightRadius={'20px'}
                border={"none"}
                bgColor={"#252994"}
                color={"#e2e2e2"}
                placeholder="Enter your source"
                fontSize={"1.3rem"}
                cursor={"pointer"}
                css={{
                  outline: "none",
                  opacity:'0.9',
                  ":hover": {
                    opacity: "0.8",
                  },
                }}
              >
                Search Trains
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Box>
      :
      <Contacts />
  );
};

export default FrontPage;
