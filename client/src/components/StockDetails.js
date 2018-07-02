import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "50%",
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function StockDetails(props) {
  const stock = props.stocks.find(
    (s) => s.ticker === props.match.params.ticker
  );
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {stock.ticker} {stock.price}
          </Typography>
          <Typography className={classes.title} color="textSecondary">
            {stock.companyName} | {stock.sector}
          </Typography>
          <table>
            <tbody>
              <tr>
                <td>Ann Dividend</td>
                <td>{stock.annualDividend}</td>
              </tr>
              <tr>
                <td>Yield</td>
                <td>{stock.annualDividend / stock.price * 100}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
}

StockDetails.propTypes = {
  stocks: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockDetails);
