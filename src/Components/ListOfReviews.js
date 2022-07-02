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
  const [rating, setRating] = useState(1);
  const [summary, setSummary] = useState("");
  const [user, setUser] = useState("");
  const [review, setReview] = useState(false);
  const [allertMSG, setAllertMSG] = useState('');
  const [sev, setSev] = useState();
  const [conError, setConError] = useState('');
  const [ratError, setRatError] = useState('');
  const [sumError, setSumError] = useState('');
  const [usrError, setUsrError] = useState('');
  const min = 1;
  const max = 6;

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
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: buildBody(),
    };
    fetch("http://localhost:8080/review/addReview", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setAllertMSG(data.status)
          setSev('success');
          setSumError('');
          setConError('');
          setUsrError('');
          setRatError('');
          setReview(true);
        } else {
          setAllertMSG(data.status);
          setSev('error')
          if (data.status === 'Error Rating') {
            setRatError('Error Rating');
            setSumError('');
            setConError('');
            setUsrError('');
          } else if (data.status === 'Error Summery') {
            setSumError('Error Summery');

            setRatError('');
            setConError('');
            setUsrError('');
          } else if (data.status === 'Error Content') {
            setConError('Error Rating');

            setRatError('');
            setSumError('');
            setUsrError('');
          } else if (data.status === 'Error User') {
            setUsrError('Error User');

            setRatError('');
            setSumError('');
            setConError('');
          } else {
            setRatError('Error Rating');
            setSumError('Error Summery');
            setConError('Error Rating');
            setUsrError('Error User');
          }
          setReview(true);
        }
      });
  };
  return (
    <>
      {review && (
        <Alert variant="filled" severity={`${sev}`} onClose={() => { setReview(false) }}>
          {`${allertMSG}`}
        </Alert>
      )}
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
              error={conError !== ''}
              id="content"
              label="Content"
              type="text"
              helperText="Not Empty"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              multiline
            />
            <TextField
              required
              error={ratError !== ''}
              id="rating"
              label="Rating"
              type="number"
              helperText="Numbers between 1 and 6"
              value={rating}
              onChange={(e) => {
                let value = e.target.value;
                if (value > max) value = max;
                if (value < min) value = min;
                setRating(value);
              }}
            />
            <TextField
              required
              error={sumError !== ''}
              id="summary"
              label="Summary"
              helperText="Not Empty"
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
              helperText="can not be changed, is provied automaticly"
              type="text"
              value={parm1}
            />
            <TextField
              required
              error={usrError !== ''}
              id="user_name"
              label="Costumer name"
              helperText="new User"
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
    </>
  );
}
