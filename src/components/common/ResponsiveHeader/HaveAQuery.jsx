import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./Query.module.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import axios from "axios";

const top100Films = [
  { label: "Suggestion" },
  { label: "Query" },
  { label: "Feedback" },
];

export default function HaveAQuery() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9885/smartihub/user/input/queryinput",
        {
          userInput: inputValue,
        }
      );

      console.log(response.inputValue);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.queryDropdown}>
        <div>
          <h2
            style={{
              fontFamily: "Roboto Slab",
              color: "lightgrey",
              fontWeight: "800",
            }}
          >
            Please Drop your thoughts here
          </h2>
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choose" />}
          onChange={handleChange}
        />
        <div className={styles.queryTextBox}>
          {selectedOption && (
            <TextField
              sx={{ width: "400px" }}
              className={styles.textfiledbox}
              label={`Enter your ${selectedOption.label} here`}
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
            />
          )}
        </div>
        <div>
          {selectedOption && (
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
