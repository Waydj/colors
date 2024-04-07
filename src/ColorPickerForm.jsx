import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { styled } from "@mui/material/styles";

const StyledContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));

export const ColorPickerForm = ({
  addColor,
  currentColor,
  setCurrentColor,
  newColorName,
  changeNewName,
  paletteIsFull,
}) => {
  return (
    <StyledContainer>
      <ChromePicker color={currentColor} onChange={setCurrentColor} />
      <ValidatorForm
        onSubmit={addColor}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <TextValidator
          value={newColorName}
          onChange={changeNewName}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "Color name must be unique",
            "Color must be unique",
          ]}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: paletteIsFull ? "grey" : currentColor.hex,
          }}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "Palette is full" : "Add color to palette"}
        </Button>
      </ValidatorForm>
    </StyledContainer>
  );
};
