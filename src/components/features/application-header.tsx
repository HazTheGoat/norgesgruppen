import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Box, styled, Typography } from "@mui/material";
import { ThemeSwitcher } from "../ui/theme-switcher";
import { Cart } from "../ui/cart";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const ApplicationHeader = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ mb: 2 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography>NorgesGruppen</Typography>

            <Box>
              <ThemeSwitcher />
              <Cart />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset sx={{ mb: 2 }} /> {/** This is to offset the AppBar height */}
    </>
  );
};
