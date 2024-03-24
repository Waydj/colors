import { useDroppable } from "@dnd-kit/core";
import { DraggableColorBox } from "./DraggableColorBox";

export const DraggableColorList = ({ colors, handleDeleteColor }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
    height: "100%",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {colors.map((color, index) => (
        <DraggableColorBox
          color={color.color}
          name={color.name}
          handleDelete={() => handleDeleteColor(color.name)}
          key={color.name}
          index={index}
          id={color.name}
        />
      ))}
    </div>
  );
};
