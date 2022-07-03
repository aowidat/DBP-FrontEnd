import { useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";

function Home() {
  const [id, setId] = useState("");
  const [pattern, setPattern] = useState("");
  const [sim, setSim] = useState("");
  const [path, setPath] = useState("");
  const [avgUser, setAvgUser] = useState(0);
  const min = 0;
  const max = 5;
    const [isSelected, setIsSelected] = useState(true);

    return (
        <div>
    <div  style={{
      position: "absolute",
      left: "39%",
      top: "15%",
      transform: "translate(-50%, -50%)",
    }}
    >
        <Button
            variant="contained"
            href={`/user/${avgUser}`}
        >
            Get Trolls
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
      <div  style={{
        position: "absolute",
        left: "50%",
        top: "15%",
        transform: "translate(-50%, -50%)",
      }}
      >
        <TextField
            type="number"
            inputProps={{ min, max }}
            value={avgUser}
            onChange={(e) => {
                let value = parseInt(e.target.value, 10);
                if (value >= max) value = max;
                if (value < min) value = min;
                setAvgUser(value);
            }}
            required
            label="Number"
        />
        </div>
      <br />
      <br />
          <div  style={{
            position: "absolute",
            left: "39%",
            top: "25%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/product/byId/${id}`}
        >Product by ID
        </Button>
          </div>
          <div  style={{
            position: "absolute",
            left: "54%",
            top: "25%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <TextField
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            label="Product ID"
        />
          </div>

          <div  style={{
            position: "absolute",
            left: "38%",
            top: "35%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/product/bypattern/${pattern}`}
        >By Pattern
        </Button>
          </div>
          <div  style={{
            position: "absolute",
            left: "54%",
            top: "35%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <TextField
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            required
            label="Product by Pattern"
        />
          </div>

          <div  style={{
            position: "absolute",
            left: "39.5%",
            top: "45%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/product/similars/${sim}`}
        >similar cheaper
        </Button>
          </div>
          <div  style={{
            position: "absolute",
            left: "54%",
            top: "45%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <TextField
            type="text"
            value={sim}
            onChange={(e) => setSim(e.target.value)}
            required
            label="Product ID"
        />
          </div>

          <div  style={{
            position: "absolute",
            left: "40%",
            top: "55%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/product/byPath/${path}`}
        >Products by path
        </Button>
          </div>
          <div  style={{
            position: "absolute",
            left: "54%",
            top: "55%",
            transform: "translate(-50%, -50%)",
          }}
          >
          <TextField
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            required
            label="Path"
        />
          </div>
          <div  style={{
            position: "absolute",
            left: "38.5%",
            top: "65%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/product/allproduct/nnn`}
        >All Product
        </Button>
          </div>
          <div  style={{
            position: "absolute",
            left: "38.5%",
            top: "75%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/categoriestree`}
        >
            Categories
        </Button>
          </div>
          <div  style={{
            position: "absolute",
            left: "39%",
            top: "85%",
            transform: "translate(-50%, -50%)",
          }}
          >
        <Button
            variant="contained"
            href={`/product/topproduct/nn`}
        >Top Products
        </Button>
          </div>
    </div>
  );
}
export default Home;
