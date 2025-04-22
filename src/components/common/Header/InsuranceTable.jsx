import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Link,
} from '@mui/material';

const insuranceData = [
  {
    topic: 'Basics of Insurance',
    category: 'Basics of Insurance',
    links: [
      { label: 'Video -1 ', url: 'https://www.youtube.com/watch?v=h7QUI972GY4' },
      { label: 'Video -2', url: 'https://youtu.be/XFTLb9F414k' },  
    ],
  },
  {
    topic: 'Insurance Introduction',
    category: 'Insurance Introduction',
    links: [
      { label: 'General and Life Insurance', url: 'https://youtu.be/heHmtqhWL2w' },
      { label: 'Property and Casuality', url: 'https://youtu.be/k4xnubYlrkI' },
      { label: 'Principles of Insurance', url: 'https://www.youtube.com/watch?v=C2dteEn_EYY' },
      { label: 'Subrogation', url: 'https://youtu.be/tZigJttpdas' },
      { label: 'Principal of Indemnity', url: 'https://youtu.be/EmR6Mykjtw8' },
      { label: 'Proximate Cause', url: 'https://youtu.be/7VljRzff_bg' },
      { label: 'Contracts', url: 'https://youtu.be/PLStHYD1eCk' },
      { label: 'Essentials Of Insurance Contracts', url: 'https://youtu.be/cZOInW-vcOw' },
      { label: 'Law of Large Numbers', url: 'https://www.youtube.com/watch?v=MntX3zWNWec' },
      { label: 'Hazard vs Risk', url: 'https://www.youtube.com/watch?v=PZmNZi8bon8' },
      { label: 'Bancassurance', url: 'https://www.youtube.com/watch?v=hsu6Fw92lcs' },
      { label: 'Underwriters', url: 'https://www.youtube.com/watch?v=pc954Ymchw0' },
      { label: 'Product Managers', url: 'https://youtu.be/ZiBeKrwfU90' },
      { label: 'Marketing Executives', url: 'https://youtu.be/YfBP3dGIObo' },
      { label: 'Actuary', url: 'https://youtu.be/VStZr5zRnHo' },
      { label: 'How insurance brokers help their customers (Video -1)', url: 'https://youtu.be/7s_jbYOt6xc' },
      { label: 'How insurance brokers help their customers (Video -2)', url: 'https://www.youtube.com/watch?v=3zbT8SKMlf4' },
     
    ],
  },
  {
  topic: 'Overview of P& C',
   category: 'Overview of P& C',
    links: [
      { label: 'Video -1', url: 'https://youtu.be/B_jhAMRBNC4' },
      { label: 'Video -2', url: 'https://youtu.be/k4xnubYlrkI' },
      { label: 'Video -3', url: 'https://youtu.be/DrJNxkBoCtA' },
    ],
  },
  {
   topic: 'PersonalAuto',
    category: 'PersonalAuto',
    links: [
     
      { label: 'Video -1', url: 'https://www.youtube.com/watch?v=yJ2iU8XPIRc' },
      { label: 'Video -2', url: 'https://www.youtube.com/watch?v=i7OPhDvtKVY' },
      { label: 'Video -3', url: 'https://www.youtube.com/watch?v=KJnN0yKlRYk' },
    ],
  },
  {
    topic: 'Home Owners',
    category: 'Home Owners',
    links: [
      { label: 'Video -1', url: 'https://youtu.be/mLgGwf7Fuhg' },
      
    ],
  },
  {
    topic: 'Life & Health',
    category: 'Life & Health',
    links: [
      
      { label: 'Video -1', url: 'https://youtu.be/DBTmNm8D-84' },
    ],
  },
  {
    topic: 'Commercial-Lines',
    category: 'Commercial-Lines',
    links: [
      { label: 'Video -1', url: 'https://youtu.be/X1QelKSqY9s' },
      { label: 'Video -2', url: 'https://youtu.be/GsPye8vG-Io' },
      { label: 'Video -3', url: 'https://youtu.be/bEN1g4UFqTI' },
      { label: 'Video -4', url: 'https://youtu.be/UiCgifERbt4' },
      { label: 'Video -5', url: 'https://youtu.be/sTj3B8ZkB1Y' },
      { label: 'Video -6', url: 'https://youtu.be/UiCgifERbt4' },
      { label: 'Video -7', url: 'https://youtu.be/hG-mDCyNHW0' },
      { label: 'Video -8', url: 'https://youtu.be/enpDn_RpTIE' },
      { label: 'Video -9', url: 'https://youtu.be/Du_amRaatxc' },
      { label: 'Video -10 (Part 1)', url: 'https://youtu.be/3ey0dW0k4KI' },
      { label: 'Video -10 (Part 2)', url: 'https://youtu.be/J3BNbRfgeyc' },
      { label: 'Video -11', url: 'https://youtu.be/WScOc-a11bk' },
      { label: 'Video -12', url: 'https://youtu.be/CFfFpFaUXe4' },
      { label: 'Video -13', url: 'https://youtu.be/spL7QoQ5T_8' },
    ],
  },
  {
   topic: 'Insurance Process Overview',
    category: 'Insurance Process Overview',
    links: [
      { label: 'What is Underwriting and How Does The Process Work?', url: 'https://youtu.be/TdbsbWNqJzs' },
      { label: 'Purpose of Underwriting (Video -1)', url: 'https://youtu.be/UKR1fIhTJz8' },
      { label: 'Purpose of Underwriting (Video -2)', url: 'https://youtu.be/618orjzLqqY' },
      { label: 'Insurance Claim Process', url: 'https://youtu.be/I60CvXE5hkQ' },
      
    ],
  },

];

function InsuranceTablePage() {
  const [selectedTopic, setSelectedTopic] = useState('Basics of Insurance');

  const filteredData = insuranceData.find(item => item.topic === selectedTopic);

  return (
    <Box sx={{ padding: 4 }}>
      <FormControl sx={{ minWidth: 300, marginBottom: 3 }}>
        <InputLabel>Select Topic</InputLabel>
        <Select
          value={selectedTopic}
          label="Select Topic"
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {insuranceData.map((item, index) => (
            <MenuItem key={index} value={item.topic}>
              {item.topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer component={Paper} sx={{ backgroundColor: '#f9f9f9' }}>
        <Table sx={{ backgroundColor: 'white' }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  width: '50%',
                  fontFamily: 'Cursive',
                  textAlign: 'left',
                  color: 'black',
                  fontSize: '18px',
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  width: '50%',
                  fontFamily: 'Cursive',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '18px',
                }}
              >
                Links
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData && (
              <TableRow>
                <TableCell
                  sx={{
                    padding: '18px',
                    fontFamily: 'Cursive',
                    textAlign: 'left',
                    color :'blue',
                    verticalAlign: 'middle',
                  }}
                >
                  {filteredData.category}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '18px',
                    textAlign: 'center',
                    fontFamily: 'Cursive',
                    color :'blue',
                    
                  }}
                >
                  {filteredData.links.map((link, idx) => (
                    <div key={idx} style={{ marginBottom: '8px' }}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'blue', fontFamily: 'cursive' }}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default InsuranceTablePage;
