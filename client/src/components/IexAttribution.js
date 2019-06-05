import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  footnote: {
    marginTop: 16,
    fontSize: 10,
    textAlign: "center"
  },
};

function IexAttribution(props) {
  const { classes } = props;
  return (
    <Typography className={classes.footnote} color="textSecondary">
      Data provided for free by{" "}
      <a href="https://iextrading.com/developer/">IEX</a>. View{" "}
      <a href="https://iextrading.com/api-exhibit-a/">IEX’s Terms of Use.</a>
    </Typography>
  );
}

IexAttribution.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IexAttribution);
