import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  arrayOf,
  bool,
  func,
  oneOf,
  shape,
  string,
  number,
  oneOfType,
} from "prop-types";

const Dropdown = ({
  labelText,
  items,
  uiType = "standard",
  autowidth = false,
  onChange = null,
}) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    onChange && onChange(e);
    setValue(e.target.value);
  };
  return (
    <Box sx={autowidth ? {} : { m: 1, minWidth: 120 }}>
      <FormControl
        variant={uiType}
        sx={autowidth ? { minWidth: 80 } : {}}
        fullWidth={!autowidth}
      >
        <InputLabel
          id={
            autowidth
              ? "demo-simple-select-autowidth-label"
              : "demo-simple-select-label"
          }
        >
          {labelText}
        </InputLabel>
        <Select
          labelId={
            autowidth
              ? "demo-simple-select-autowidth"
              : "demo-simple-select-label"
          }
          id={autowidth ? "demo-simple-select-autowidth" : "demo-simple-select"}
          label={labelText}
          onChange={handleChange}
          value={value}
          autoWidth={autowidth}
        >
          {items.map((item, idx) => (
            <MenuItem key={idx} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

Dropdown.propTypes = {
  labelText: string,
  items: arrayOf(
    shape({
      value: oneOfType([string, number]),
      label: string,
    })
  ),
  uiType: oneOf(["standard", "filled"]),
  autowidth: bool,
  onChange: func,
};

export default Dropdown;
