import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';
import insuranceBanner from '../../common/assets/insurance.png';
import { Margin } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);

    if (selectedValue === "10") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EUy1WEYNR6BMj87Vs3O6CQcBFzEFlfMqe4OYIMQSDPDlFA?e=vjwGAR', '_blank');
    } else if (selectedValue === "20") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EedVtZEsG1xFpNCjJnPANp8B02SdsUGYnrb6UFk9HsGRTg?e=DL2aXX', '_blank');
    } else if (selectedValue === "30") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EVuOWdrQLFpIlh6tHao5NMsBQu5nJ9oK5I4197aFnr0A2w?e=v1FQnj', '_blank');
    } else if (selectedValue === "40") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EUQbciVTIMJIh69W2R4fMPcB5OuWf04xWjfPnDA-S2iJbw?e=eqLYcc', '_blank');
    } else if (selectedValue === "50") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EVaxIfd4p7pEreoH2dTFKyUBBBwqjG2IyAQwsPRtp3X9YQ?e=7MBdEf', '_blank');
    } else if (selectedValue === "60") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EZSilzOZUdxIkP_jSpxPzqABN5FUDZTG3QE0FuHG6Jp3mw?e=5iQVkf', '_blank');
    } else if (selectedValue === "70") {
      window.open('https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/Eb2OYVMxBoxDt4fqLkOPgBQBJbiDZVkjCn3GgCNXCouXFA?e=gyvxJl', '_blank');
    }
  };

  return (
    <div>
      
      <Box
        component="img"
        src={insuranceBanner}
        alt="Insurance Banner"
        sx={{
          width: '50%',
          height: 'auto',
          objectFit: 'cover',
          marginBottom: 4,
         marginTop :10,
    
        }}
      />

      {/* Dropdown */}
      <FormControl variant="standard" sx={{ m: 1, minWidth:350, marginTop : 40 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ fontSize: '1.5rem',color:'blue'}}>
          Explore Line of Business
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Insurance"
          sx={{ paddingTop: 2, }}
          
          
        >
          
          <MenuItem value="10">Personal & Commercial Auto</MenuItem>
          <MenuItem value="20">Home Owners</MenuItem>
          <MenuItem value="30">General Liability</MenuItem>
          <MenuItem value="40">Commercial Property</MenuItem>
          <MenuItem value="50">Business Owners</MenuItem>
          <MenuItem value="60">Workers Compensation</MenuItem>
          <MenuItem value="70">Inland & Ocean Marine</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
