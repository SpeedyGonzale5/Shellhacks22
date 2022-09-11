import { useState } from "react";
import { ActionIcon, TextInput, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from "@tabler/icons";



export default function TwilioSubscribe() {
    const theme = useMantineTheme();
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined)

    // function messageService() {
    //     if(phoneNumber?.length === 10){
    //         const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    //                 client.messages.create({
    //                     from: 'process.env.TWILIO_PHONE_NUMBER',
    //                     to: '9548268044',
    //                     body: 'You opted in for recieving text notifications from VitalEssence!'
    //                 }).then((message) => {console.log(message)})
    // }
    // }

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://api.twilio.com/2010-04-01/Accounts/AC62761f2bae5c5659cc5eb65d42e5d57e/Messages.json",
    //     "method": "POST",
    //     "headers": {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             "Authorization": "Basic hashedAuthToken",
    //             "Cache-Control": "no-cache",
    //             "Postman-Token": "0s41f5ac-2630-40c4-8041-1e5ee513f20d"
    //     },
    //     "data": {
    //             "To": "+353838173123",
    //             "From": "+18634000432",
    //             "MessagingServiceSid": "MG3d622e63a343e11a2032b1414560f227",
    //             "Body": "Test, hi"
    //     }
    // }
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });

  return (
    <TextInput
      placeholder="***-***-****"
      label="Phone Number"
      variant="filled"
      width={"50%"}
      onChange={(input) => {setPhoneNumber(input.target.value); console.log(phoneNumber)}}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
            <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
    />
  );
}