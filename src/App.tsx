import { Container } from "@mui/material";
import { ProductListFeatureShell } from "./components/features/product-list-feature-shell";
import { ProductDialog } from "./components/ui/product-dialog";
import { ApplicationHeader, GlobalCartDrawer } from "./components";

function App() {
  return (
    <Container maxWidth="xl">
      <ApplicationHeader />
      <GlobalCartDrawer />
      <ProductListFeatureShell />
      <ProductDialog />
    </Container>
  );
}

export default App;
