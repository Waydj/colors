import { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import { DraggableColorList } from "./DraggableColorList";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { PaletteFormNav } from "./PaletteFormNav";
import { ColorPickerForm } from "./ColorPickerForm";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Container = styled("div")(() => ({
  width: "90%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}));

const Buttons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

export const NewPaletteForm = ({ savePalette, palettes }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState({ hex: "ffffff" });
  const [colors, setColors] = useState(palettes[0].colors);
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");

  const maxColors = 20;
  const paletteIsFull = colors.length >= maxColors;

  const addColor = () => {
    const newColor = {
      name: newColorName,
      color: currentColor.hex,
    };
    setColors((prev) => [...prev, newColor]);
    setNewColorName("");
  };

  const changeNewName = (e) => {
    setNewColorName(e.target.value);
  };

  const onSavePalette = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "🎨",
      colors,
    };
    savePalette(newPalette);
    navigate("/");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDeleteColor = (colorName) => {
    setColors((prev) => prev.filter((color) => color.name !== colorName));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setColors((items) => {
        const oldIndex = over.data.current?.sortable.index;
        const newIndex = active.data.current?.sortable.index;

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const clearPalette = () => {
    setColors([]);
  };

  const randomColor = () => {
    const allColors = palettes.map((colors) => colors.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        (color) => color.name === randomColor.name
      );
    }
    setCurrentColor({ hex: randomColor.color });
    setNewColorName(randomColor.name);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule("isColorUnique", () =>
      colors.every(({ color }) => color !== currentColor.hex)
    );

    return () => {
      ValidatorForm.removeValidationRule("isColorNameUnique");
      ValidatorForm.removeValidationRule("isColorUnique");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newColorName, currentColor]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PaletteFormNav
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        onSavePalette={onSavePalette}
        newPaletteName={newPaletteName}
        setNewPaletteName={setNewPaletteName}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Container>
          <Typography variant="h4">Design your palette</Typography>
          <Buttons>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearPalette}
            >
              Clear palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={randomColor}
              disabled={paletteIsFull}
            >
              Random color
            </Button>
          </Buttons>
          <ColorPickerForm
            addColor={addColor}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            newColorName={newColorName}
            changeNewName={changeNewName}
            paletteIsFull={paletteIsFull}
          />
        </Container>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext
            items={colors.map((color) => color.name)}
            strategy={rectSortingStrategy}
          >
            <DraggableColorList
              colors={colors}
              handleDeleteColor={handleDeleteColor}
            />
          </SortableContext>
        </DndContext>
      </Main>
    </Box>
  );
};
