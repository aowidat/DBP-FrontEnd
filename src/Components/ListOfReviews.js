import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Button} from "@mui/material";
import Stack from "@mui/material/Stack";


export default function ListOfReviews() {
  return (
      <div  style={{
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
      }}>
      <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
      >
        <div>
          <TextField required
                     id="outlined-search"
                     label="Content"
                     type="text" />
          <TextField
              required
              id="rating"
              label="Rating"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField required
                     id="outlined-search"
                     label="Summary"
                     type="text" />
          <TextField disabled
                     id="outlined-search"
                     label="Product ID"
                     type="text" />
          <TextField required
                     id="outlined-search"
                     label="Costumer name"
                     type="text" />
  <br></br>
  <br></br>
          <Stack
              direction="row"
              spacing={2}
              style={{
                position: "absolute",
                left: "25%",

                transform: "translate(-50%, -50%)",
              }}
          >
            <Button>
              Submit
            </Button>
          </Stack>

        </div>
      </Box>
      </div>
  );
}
