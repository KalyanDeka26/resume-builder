import { Button, Grid, Select, Textarea, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { createNewEducationObj, ResumeFormType } from "..";

const Education: React.FC<{ form: ResumeFormType }> = ({ form }) => {
  return (
    <>
      <Button
        className="mt-2"
        variant="subtle"
        radius="md"
        color="violet"
        onClick={() =>
          form.insertListItem("education", createNewEducationObj())
        }
      >
        Add Education
      </Button>
      {form.values.education.map((_, i) => {
        return (
          <div key={i}>
            <Grid grow pt={8}>
              <Grid.Col span={5}>
                <TextInput
                  className="w-full"
                  label="School"
                  placeholder="School name"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.school`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <Select
                  label="Degree"
                  placeholder="Select degree"
                  variant="filled"
                  data={[
                    { value: "associate-degree", label: "Associate Degree" },
                    { value: "bachelor-degree", label: "Bachelor Degree" },
                    { value: "masters", label: "Masters" },
                    { value: "doctoral", label: "Doctoral" },
                    {
                      value: "professional-degree",
                      label: "Professional Degree",
                    },
                    { value: "joint-degree", label: "Joint Degree" },
                  ]}
                  {...form.getInputProps(`education.${i}.degree`)}
                />
              </Grid.Col>
            </Grid>
            <Grid grow pt={8}>
              <Grid.Col span={5}>
                <TextInput
                  className="w-full"
                  label="Field of study"
                  placeholder="Enter field of study"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.field_of_study`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  className="w-full"
                  label="Grade/GPA"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.grade`)}
                />
              </Grid.Col>
            </Grid>
            <Grid grow pt={8}>
              <Grid.Col span={1}>
                <TextInput
                  className="w-full"
                  label="Country"
                  placeholder="Country"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.country`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  label="City"
                  placeholder="City"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.city`)}
                />
              </Grid.Col>
            </Grid>
            <Grid grow pt={8}>
              <Grid.Col span={1}>
                <DateInput
                  label="From"
                  placeholder="From"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.from`)}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <DateInput
                  label="To"
                  placeholder="To"
                  variant="filled"
                  {...form.getInputProps(`education.${i}.to`)}
                />
              </Grid.Col>
            </Grid>
            <Textarea
              mt={8}
              placeholder="Description"
              label="Description"
              autosize
              minRows={2}
              variant="filled"
              {...form.getInputProps(`education.${i}.desc`)}
            />
            <Button
              mt={8}
              className="mt-2"
              variant="subtle"
              color="red"
              radius="md"
              onClick={() => form.removeListItem("education", i)}
            >
              Delete Education
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default Education;
