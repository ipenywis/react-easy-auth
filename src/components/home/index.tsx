import { Button } from "baseui/button";
import { HeadingXXLarge } from "baseui/typography";
import { useSignOut } from "react-auth-kit";
import { Container } from "../commons";

function Home() {
  const signOut = useSignOut();

  return (
    <Container>
      <HeadingXXLarge color="secondary500">Welcome Home Bud!</HeadingXXLarge>
      <Button kind="secondary" onClick={signOut}>
        Logout
      </Button>
    </Container>
  );
}

export { Home };
