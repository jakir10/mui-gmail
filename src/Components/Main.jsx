import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Mail from "./Mail";

const Main = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={1}>
          <Mail />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
