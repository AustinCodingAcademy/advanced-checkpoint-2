import React from "react";
import PropTypes from "prop-types";
import { getPath } from "../utils";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import IexAttribution from "./IexAttribution";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 100,
  },
  priceUp: {
    alignItems: "center",
    marginRight: 30,
    color: "green",
  },
  priceDown: {
    marginRight: 30,
    color: "red",
  },
});

function StockList(props) {
  const { classes } = props;
  const stockListItems = props.stocks.map((s, i) => {
    const quote = getPath(props, "prices." + s.ticker + ".quote") || {
      latestPrice: 0,
      change: 0,
      changePercent: 0,
    };
    const { latestPrice, change, changePercent } = quote;
    return (
      <ListItem button key={i} component={Link} to={"/details/" + s.ticker}>
        <ListItemText primary={s.ticker} secondary={s.companyName} />
        <div className={change < 0 ? classes.priceDown : classes.priceUp}>
          {change < 0 ? <ArrowDropDown /> : <ArrowDropUp />}
          {numeral(latestPrice).format("0,0.00")}{" "}
          {numeral(change).format("0,0.00")}{" "}
          ({numeral(changePercent).format("0.00%")})
        </div>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              if (props.deleteStock) {
                props.deleteStock(s);
              }
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return (
    <div className={classes.root}>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.fab}
        component={Link}
        to={"/create"}
      >
        <AddIcon />
      </Button>
      <List component="nav">{stockListItems}</List>
      <IexAttribution />
    </div>
  );
}

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
  prices: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockList);
