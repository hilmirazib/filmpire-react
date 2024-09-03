import { makeStyles, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
  },
}));

export default useStyles;
