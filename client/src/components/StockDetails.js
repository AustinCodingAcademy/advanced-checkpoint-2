import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IexAttribution from "./IexAttribution";

const styles = {
  root: {
    width: "50%",
  },
  card: {
    // minWidth: 275,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
  },
  cardActions: {
    justifyContent: "center",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  footnote: {
    marginTop: 16,
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
};

function StockDetails(props) {
  const stock = props.stocks.find(
    (s) => s.ticker === props.match.params.ticker
  );
  const price = props.prices[stock.ticker].quote.latestPrice;
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={""}
          action={
            <Typography variant="headline" component="h2">
              {price}
            </Typography>
          }
          title={stock.ticker}
          subheader={stock.companyName + " | " + stock.sector}
        />
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Shares</TableCell>
                <TableCell>{numeral(stock.shares).format("0.00")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ann Dividend / Share</TableCell>
                <TableCell>
                  {numeral(stock.annualDividend).format("$0.00")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Yield</TableCell>
                <TableCell>
                  {numeral(stock.annualDividend / price).format("0.00%")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ann Income</TableCell>
                <TableCell>
                  {numeral(stock.annualDividend * stock.shares).format("$0.00")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <IexAttribution />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            component={Link}
            to={"/edit/" + stock.ticker}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            component={Link}
            to={"/"}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

StockDetails.propTypes = {
  stocks: PropTypes.array.isRequired,
  prices: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockDetails);
