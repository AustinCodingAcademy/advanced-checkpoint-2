import React from "react";
import PropTypes from "prop-types";
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
    zIndex: 100
  },
  price: {
    marginRight: 30,
  },
});

function StockList(props) {
  const { classes } = props;
  const stockListItems = props.stocks.map((s, i) => {
    return (
      <ListItem button key={i} component={Link} to={"/details/" + s.ticker}>
        <ListItemText primary={s.ticker} secondary={s.companyName} />
        <div className={classes.price}>{numeral(props.prices[s.ticker]).format("0,0.00")}</div>
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
  prices: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockList);
