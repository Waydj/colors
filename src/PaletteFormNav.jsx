import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const PaletteFormNav = ({
  palettes,
  handleDrawerOpen,
  open,
  onSavePalette,
  newPaletteName,
  setNewPaletteName,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );

    return () => {
      ValidatorForm.removeValidationRule("isPaletteNameUnique");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [palettes]);

  return (
    <AppBar position="fixed" open={open} color="default">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
        <ValidatorForm onSubmit={onSavePalette}>
          <TextValidator
            value={newPaletteName}
            onChange={(e) => setNewPaletteName(e.target.value)}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={[
              "Enter Palette Name",
              "Palette name must be unique",
            ]}
          />
          <Button type="submit" variant="contained" color="primary">
            Save Palette
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            color="secondary"
          >
            Go Back
          </Button>
        </ValidatorForm>
      </Toolbar>
    </AppBar>
  );
};
