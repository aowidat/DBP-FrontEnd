import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

export default function ListOfReviews() {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState("");
  const [user, setUser] = useState("");
  const [review, setReview] = useState(false);

  let { parm1 } = useParams();
  const buildBody = () => {
    return JSON.stringify({
      content: content,
      rating: rating,
      summery: summary,
      person: {
        name: user,
      },
      product_review: {
        id: parm1,
      },
    });
  };
  const submit = () => {
    console.log(buildBody());
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: buildBody(),
    };
    fetch("http://localhost:8080/review/addReview", requestOptions)
      .then((response) => response.json())
      .then((data) => setReview(true));
  };
  return (
    <>
      {!review && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="content"
                label="Content"
                type="text"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <TextField
                required
                id="rating"
                label="Rating"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              <TextField
                required
                id="summary"
                label="Summary"
                type="text"
                value={summary}
                onChange={(e) => {
                  setSummary(e.target.value);
                }}
              />
              <TextField
                disabled
                id="product_id"
                label="Product ID"
                type="text"
                value={parm1}
              />
              <TextField
                required
                id="user_name"
                label="Costumer name"
                type="text"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
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
                <Button onClick={submit}>Submit</Button>
              </Stack>
            </div>
          </Box>
        </div>
      )}
      {review && (
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
    </>
  );
}
