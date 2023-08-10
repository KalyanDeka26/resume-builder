import { useState } from "react";
import { Stepper, Button, Group, Container, Text } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import PersonalDetails from "./Sections/PersonalDetails";
import Summary from "./Sections/Summary";
import WorkHistory from "./Sections/WorkHistory";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";
import { notifications } from "@mantine/notifications";

const API_URL = process.env.REACT_APP_API_URL as string;

type FormType = {
  name: string;
  job_title: string;
  email: string;
  contact: string;
  github: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  skills: { value: string; label: string }[];
  work_history: WorkHistory[];
  education: Education[];
};

export type ResumeFormType = UseFormReturnType<FormType>;

type WorkHistory = {
  company: string;
  job_title: string;
  company_website: string;
  employment_type: string;
  country: string;
  city: string;
  from: Date;
  to: Date;
  current: boolean;
  tech: [];
  desc: string;
};

export const createNewWorkHistoryObj = (): WorkHistory => {
  return {
    company: "",
    job_title: "",
    company_website: "",
    employment_type: "",
    country: "",
    city: "",
    from: new Date(),
    to: new Date(),
    current: false,
    tech: [],
    desc: "",
  };
};

type Education = {
  school: string;
  degree: string;
  field_of_study: string;
  grade: string;
  country: string;
  city: string;
  from: Date;
  to: Date;
  desc: string;
};

export const createNewEducationObj = (): Education => {
  return {
    school: "",
    degree: "",
    field_of_study: "",
    grade: "",
    country: "",
    city: "",
    from: new Date(),
    to: new Date(),
    desc: "",
  };
};

const ResumeForm: React.FC = () => {
  const [active, setActive] = useState(0);
  const [created, setCreated] = useState(false);
  const form = useForm<FormType>({
    initialValues: {
      name: "",
      job_title: "",
      email: "",
      contact: "",
      github: "",
      linkedin: "",
      portfolio: "",
      summary: "",
      work_history: [createNewWorkHistoryObj()],
      skills: [],
      education: [createNewEducationObj()],
    },
  });

  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleSubmit = () => {
    fetch(`${API_URL}/resume`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form.values),
    })
      .then((res) => {
        if (!res.ok) {
          notifications.show({
            message: "Please fill out the required fields",
            color: "red",
          });
        } else {
          setCreated(true);
          notifications.show({
            message: "Resume created",
          });
        }
      })
      .catch(console.error);
  };

  return (
    <Container py={100}>
      <Stepper
        color="violet"
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        allowNextStepsSelect={false}
      >
        <Stepper.Step label="Personal Details">
          <PersonalDetails form={form} />
        </Stepper.Step>
        <Stepper.Step label="Summary">
          <Summary form={form} />
        </Stepper.Step>
        <Stepper.Step label="Work History">
          <WorkHistory form={form} />
        </Stepper.Step>
        <Stepper.Step label="Skills">
          <Skills form={form} />
        </Stepper.Step>
        <Stepper.Step label="Education">
          <Education form={form} />
        </Stepper.Step>
        <Stepper.Completed>
          {!created && "Completed, click back button to get to previous step"}
          {created && (
            <Text mt={20} ta="center" c="violet" fw={500} fz="xl">
              Resume created successfully
            </Text>
          )}
        </Stepper.Completed>
      </Stepper>

      {!created && (
        <Group position="center" mt="xl">
          <Button
            color="violet"
            disabled={active === 0}
            variant="outline"
            onClick={prevStep}
          >
            Back
          </Button>
          {active === 5 ? (
            <Button onClick={handleSubmit} color="violet">
              Complete
            </Button>
          ) : (
            <Button onClick={nextStep} color="violet">
              Next Step
            </Button>
          )}
        </Group>
      )}
    </Container>
  );
};

export default ResumeForm;
