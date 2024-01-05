import { ChangeEvent, useState } from "react";
import { Box } from "@chakra-ui/react";
import UserDetails from "./UserDetails";
import PersonalInfo from "./PersonalInfo";
import FormDetails from "./FormDetails";

function MainForm() {
  const [values, setValues] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    age: 18,
    city: "",
    country: "",
  });

  const prevStep = () => {
    setValues({ ...values, step: values.step - 1 });
  };

  const nextStep = () => {
    setValues({ ...values, step: values.step + 1 });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(values, null, 3));
  };

  return (
    <Box
      minH={"100vh"}
      minW={"100vw"}
      backgroundColor={"#264653"}
      textColor={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        minW={"512px"}
        minH={"400px"}
        backgroundColor={"grey"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <form onSubmit={handleSubmit}>
          {(() => {
            switch (values.step) {
              case 1:
                return (
                  <UserDetails
                    values={values}
                    nextStep={nextStep}
                    handleChange={handleChange}
                  />
                );
              case 2:
                return (
                  <PersonalInfo
                    values={values}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                  />
                );

              case 3:
                return <FormDetails values={values} prevStep={prevStep} />;
              default:
                return null;
            }
          })()}
        </form>
      </Box>
    </Box>
  );
}

export default MainForm;
