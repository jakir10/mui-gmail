import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import gmail from "../assets/gmail.png";
import { Grid, Avatar } from "@mui/material";
import lens from "../assets/lens.png";
import profile from "../assets/profile.jpg";

export default function Navbar() {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            backgroundColor: "#f9f9f9",
            minHeight: "5vw",
            minWidth: "100vw",
            paddingTop: "7px",
          }}
        >
          <Toolbar variant="dense">
            <Grid item xs={2}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: "0.8vw", color: "#3C3C3C" }}
                >
                  <MenuIcon sx={{ width: "2vw" }} />
                </IconButton>
                <img style={{ width: "2.3vw" }} src={gmail} alt="gmail_logo" />
                <Typography
                  sx={{
                    color: "#3C3C3C",
                    marginLeft: "1vw",
                    fontSize: "1.8vw ",
                  }}
                  variant="h6"
                  color="inherit"
                  component="div"
                >
                  Gmail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  width: "55vw",
                  height: "3.7vw",
                  marginLeft: "3vw",
                }}
              >
                <img
                  src={lens}
                  alt="search icon"
                  style={{
                    width: "1.3vw",
                    height: "1.3vw",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                />
                <input
                  placeholder="Search Mail"
                  style={{
                    height: "3vw",
                    width: "45vw",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                    marginLeft: "3vw",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={1}>
              <Avatar
                src={profile}
                sx={{ marginLeft: "5.5vw", width: "3vw", height: "3vw" }}
              />
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}
