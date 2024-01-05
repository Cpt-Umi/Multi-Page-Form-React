import { Box, Input, Button, HStack } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
  values: {
    step: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    city: string;
    country: string;
  };

  prevStep: () => void;
  nextStep: () => void;

  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function PersonalInfo({ values, prevStep, nextStep, handleChange }: Props) {
  return (
    <Box width={"200px"} color={"black"}>
      <label htmlFor="firstName">Age:</label>
      <Input
        type="number"
        name="age"
        value={values.age}
        onChange={(event) => handleChange(event)}
        marginBottom={"10px"}
      />
      <label htmlFor="lastName">City:</label>
      <Input
        type="text"
        name="city"
        value={values.city}
        onChange={(event) => handleChange(event)}
        marginBottom={"10px"}
      />
      <label htmlFor="Email">Country:</label>
      <Input
        type="text"
        name="country"
        value={values.country}
        onChange={(event) => handleChange(event)}
        marginBottom={"10px"}
      />
      <HStack>
        <Button variant={"outline"} onClick={() => prevStep()}>
          Back
        </Button>
        <Button variant={"outline"} onClick={() => nextStep()}>
          SaveNContinue
        </Button>
      </HStack>
    </Box>
  );
}

export default PersonalInfo;
