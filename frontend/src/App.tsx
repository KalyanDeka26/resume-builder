import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ResumeForm from "./components/ResumeForm";

function App() {
  return (
    <div className="App">
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <ResumeForm />
      </MantineProvider>
    </div>
  );
}

export default App;
