import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledBox = styled.div`
  background-color: ${(props) => props.color};
  height: 25%;
  width: 20%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -3.5px;
  &:hover svg {
    color: white;
    transform: scale(1.5);
  }
`;

const StyledBoxContent = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  left: 0;
  bottom: 0;
  color: black;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

export const DraggableColorBox = ({ color, name }) => {
  return (
    <StyledBox color={color}>
      <StyledBoxContent>
        <span>{name}</span>
        <DeleteIcon
          color="error"
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </StyledBoxContent>
    </StyledBox>
  );
};
