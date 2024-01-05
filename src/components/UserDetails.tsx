import { Box, Button, Input } from "@chakra-ui/react";
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

  nextStep: () => void;

  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function UserDetails({ values, handleChange, nextStep }: Props) {
  return (
    <Box width={"200px"} color={"black"}>
      <label htmlFor="firstName">First Name:</label>
      <Input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={(event) => handleChange(event)}
        marginBottom={"10px"}
      />
      <label htmlFor="lastName">Last Name:</label>
      <Input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={(event) => handleChange(event)}
        marginBottom={"10px"}
      />
      <label htmlFor="Email">Email:</label>
      <Input
        type="email"
        name="email"
        value={values.email}
        onChange={(event) => handleChange(event)}
        marginBottom={"10px"}
      />
      <Button variant={"outline"} onClick={() => nextStep()}>
        SaveNContinue
      </Button>
    </Box>
  );
}

export default UserDetails;
