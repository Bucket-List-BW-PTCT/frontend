import React from "react";
import { Badge, Button } from "reactstrap";

let styleCounter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default function BucketCounter() {
  // useEffect(() => {
  //   axios
  //     .get(`https://bw-bucketlist.herokuapp.com/api/users/dummy1`)
  //     .then(res => console.log(res))
  //     .catch();
  // }, []);

  return (
    <div style={styleCounter}>
      <div style={{ border: "1px solid black" }}>
        <h2>Bucket Counter</h2>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">StateHere</Badge>
        </Button>
      </div>
    </div>
  );
}
