import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Shares</TableCell>
                <TableCell>{numeral(stock.shares).format("0.00")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ann Dividend / Share</TableCell>
                <TableCell>{numeral(stock.annualDividend).format("$0.00")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Yield</TableCell>
                <TableCell>{numeral(stock.annualDividend / stock.price).format("0.00%")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ann Income</TableCell>
                <TableCell>{numeral(stock.annualDividend * stock.shares).format("$0.00")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
