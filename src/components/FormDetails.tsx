import { Box, Button, HStack } from "@chakra-ui/react";

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
}

function FormDetails({ values, prevStep }: Props) {
  return (
    <Box>
      <HStack>
        <h3>FirstName:</h3>
        <p>{values.firstName}</p>
      </HStack>
      <HStack>
        <h3>LastName:</h3>
        <p>{values.lastName}</p>
      </HStack>
      <HStack>
        <h3>Email:</h3>
        <p>{values.email}</p>
      </HStack>
      <HStack>
        <h3>Age:</h3>
        <p>{values.age}</p>
      </HStack>
      <HStack>
        <h3>City:</h3>
        <p>{values.city}</p>
      </HStack>
      <HStack>
        <h3>Country:</h3>
        <p>{values.country}</p>
      </HStack>
      <HStack>
        <Button onClick={() => prevStep()}>Back</Button>
        <Button onClick={() => console.log(JSON.stringify(values, null, 2))}>
          Submit
        </Button>
      </HStack>
    </Box>
  );
}

export default FormDetails;
