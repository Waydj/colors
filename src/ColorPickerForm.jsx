import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export const ColorPickerForm = ({
  addColor,
  currentColor,
  setCurrentColor,
  newColorName,
  changeNewName,
  paletteIsFull,
}) => {
  return (
    <div>
      <ChromePicker color={currentColor} onChange={setCurrentColor} />
      <ValidatorForm onSubmit={addColor}>
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
    </div>
  );
};
