import {
  Button,
  Checkbox,
  Grid,
  MultiSelect,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { createNewWorkHistoryObj, ResumeFormType } from "..";

const technologies = [
  { value: "css", label: "CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "html", label: "HTML" },
  { value: "mantine", label: "Mantine" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "tailwind-css", label: "TailwindCSS" },
];

const WorkHistory: React.FC<{ form: ResumeFormType }> = ({ form }) => {
  return (
    <>
      <Button
        className="mt-2"
        color="violet"
        variant="subtle"
        radius="md"
        onClick={() =>
          form.insertListItem("work_history", createNewWorkHistoryObj())
        }
      >
        Add Work History
      </Button>
      {form.values.work_history.map((_, i) => {
        return (
          <div key={i}>
            <Grid grow pt={8}>
              <Grid.Col span={5}>
                <TextInput
                  className="w-full"
                  label="Company"
                  placeholder="Company name"
                  variant="filled"
                  {...form.getInputProps(`work_history.${i}.company`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  className="w-full"
                  label="Job Title"
                  placeholder="Job Title"
                  variant="filled"
                  {...form.getInputProps(`work_history.${i}.job_title`)}
                />
              </Grid.Col>
            </Grid>
            <Grid grow pt={8}>
              <Grid.Col span={5}>
                <TextInput
                  className="w-full"
                  label="Company Website"
                  placeholder="Company website"
                  variant="filled"
                  {...form.getInputProps(`work_history.${i}.company_website`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <Select
                  label="Employment Type"
                  placeholder="Select employment type"
                  variant="filled"
                  data={[
                    { value: "full-time", label: "Full-time" },
                    { value: "part-time", label: "Part-time" },
                    { value: "contract", label: "Contract" },
                    { value: "freelance", label: "Freelance" },
                    { value: "self-employed", label: "Self-employed" },
                    { value: "internship", label: "Internship" },
                  ]}
                  {...form.getInputProps(`work_history.${i}.employment_type`)}
                />
              </Grid.Col>
            </Grid>
            <Grid grow pt={8}>
              <Grid.Col span={1}>
                <DateInput
                  label="From"
                  placeholder="From"
                  variant="filled"
                  {...form.getInputProps(`work_history.${i}.from`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <DateInput
                  label="To"
                  placeholder="To"
                  variant="filled"
                  disabled={!!form.values.work_history[i].current}
                  {...form.getInputProps(`work_history.${i}.to`)}
                />
              </Grid.Col>
            </Grid>
            <Checkbox
              mt={8}
              label="I currently work here"
              {...form.getInputProps(`work_history.${i}.current`, {
                type: "checkbox",
              })}
            />
            <MultiSelect
              mt={8}
              data={technologies}
              label="Technologies"
              description="We recommend to keep your technologies max 10-12"
              variant="filled"
              {...form.getInputProps(`work_history.${i}.tech`)}
            />
            <Textarea
              mt={8}
              placeholder="Description"
              label="Description"
              autosize
              minRows={2}
              variant="filled"
              {...form.getInputProps(`work_history.${i}.desc`)}
            />
            <Button
              mt={8}
              className="mt-2"
              variant="subtle"
              color="red"
              radius="md"
              onClick={() => form.removeListItem("work_history", i)}
            >
              Delete Work History
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default WorkHistory;
