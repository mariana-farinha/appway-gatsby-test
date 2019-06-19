import Link from "next/link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import appwayLogo from "../../static/images/logos/appway-logo.png?resize&size=300";

const useStyles = makeStyles(theme => ({
  wrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link href="/">
              <a>
                <img
                  src={appwayLogo.src}
                  className="mw-100"
                  style={{ width: "6.5rem" }}
                />
              </a>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navigation;
