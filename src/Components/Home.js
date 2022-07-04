import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Home() {
  const [id, setId] = useState("");
  const [pattern, setPattern] = useState("");
  const [sim, setSim] = useState("");
  const [path, setPath] = useState("");
  const [avgUser, setAvgUser] = useState(1);
  const [init, setInit] = useState(false);
  const [finish, setFinish] = useState(false);
  const min = 1;
  const max = 5;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack spacing={2} direction="row">
          <Button variant="contained" href={`/user/${avgUser}`}>
            Get Trolls
          </Button>
          <TextField
            required
            id="avgUser"
            label="Avg Rating"
            type="number"
            helperText="Numbers between 1 and 6"
            value={avgUser}
            onChange={(e) => {
              let value = e.target.value;
              if (value > max) value = max;
              if (value < min) value = min;
              setAvgUser(value);
            }}
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            href={`/product/byId/${id}`}
            disabled={!id.length > 0}
          >
            Product by ID
          </Button>
          <TextField
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            label="Product ID"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            href={`/product/bypattern/${pattern}`}
            disabled={!pattern.length > 0}
          >
            By Pattern
          </Button>
          <TextField
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            required
            label="Product by Pattern"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            href={`/product/similars/${sim}`}
            disabled={!sim.length > 0}
          >
            similar cheaper
          </Button>
          <TextField
            type="text"
            value={sim}
            onChange={(e) => setSim(e.target.value)}
            required
            label="Product ID"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            href={`/product/byPath/${path}`}
            disabled={!path.length > 0}
          >
            Products by path
          </Button>
          <TextField
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            required
            label="Path"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" href={`/product/allproduct/nnn`}>
            All Product
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" href={`/categoriestree`}>
            Categories
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" href={`/product/topproduct/nn`}>
            Top Products
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:8080/init")
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then(setInit(true))
                .then(setFinish(true));
            }}
          >
            Initit
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:8080/finish")
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then(setFinish(false));
            }}
          >
            Finsh
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
export default Home;
