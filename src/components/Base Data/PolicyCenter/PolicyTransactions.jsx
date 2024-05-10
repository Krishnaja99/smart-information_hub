import * as React from "react";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

export default function PolicyTransactions() {
  return (
    <ButtonGroup
      aria-label="outlined primary button group"
      color="success"
      disabled={false}
      orientation="horizontal"
      size="lg"
      spacing={0}
      variant="outlined"
    >
      <Button>New Business</Button>
      <Button>Policy Change</Button>
      <Button>Rewrite</Button>
      <Button>Renewal</Button>
      <Button>Cancellation</Button>
    </ButtonGroup>
  );
}
