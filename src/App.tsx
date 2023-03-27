import React from "react";
import Accordion from "./components/Accordion";
import Card from "./components/Card";
import SearchContainer from "./components/SearchContainer";
import Skeleton from "./components/Skeleton";
import { UserContext } from "./context/UserContext";
import { repoReducer } from "./reducers/repoReducer";
import { getUserRepos } from "./services/api.services";

function App() {
  // initialize user context for global state
  const { state } = React.useContext(UserContext);
  // state for expand accordion
  const [expanded, setExpanded] = React.useState<string | null>(null);
  // initialize repo reducer
  const [{ repos, isLoading, error }, dispatch] = React.useReducer(
    repoReducer,
    { isLoading: false }
  );
  
  // create function for open, close accordion and fetch repo for expanded accordion
  const onAccordionChange = async (expanded: boolean, repoUrl: string) => {
    if (expanded) {
      setExpanded(repoUrl);
      dispatch({ type: "request" });
      try {
        const response = await getUserRepos(repoUrl);
        if (response) dispatch({ type: "success", results: response });
      } catch (err: any) {
        dispatch({ type: "failure", error: err || "" });
      }
    }
  };
  
  // initialize loading and empty state  
  const reposSkeleton = isLoading ? <Skeleton height={64} /> : null;
  const userSkeleton = state.isLoading ? <Skeleton height={48} /> : null;
  const noReposData = !repos?.length && !isLoading ? "No Data" : null;

  return (
    <div className="App max-w-4xl mx-auto">
      {state.isLoading}
      <SearchContainer />
      {userSkeleton}
      {state.data &&
        state.data.map((user) => (
          <Accordion
            id={user.id}
            key={user.id}
            title={user?.login}
            reposUrl={user.repos_url}
            change={onAccordionChange}
            expanded={expanded === user.repos_url}
          >
            {reposSkeleton}
            {repos?.length && !isLoading
              ? repos?.map((repo) => (
                  <Card
                    key={repo.id}
                    title={repo.name}
                    description={repo.description}
                    star={repo.stargazers_count}
                  />
                ))
              : null}
            {noReposData}
          </Accordion>
        ))}
    </div>
  );
}

export default App;
