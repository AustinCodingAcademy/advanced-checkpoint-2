import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = (theme) => ({
  root: {
    width: "50%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  price: {
    marginRight: 30
  }
});

function StockList(props) {
  const { classes } = props;
  const stockListItems = props.stocks.map((s, i) => {
    return (
      <ListItem button key={i}>
        <ListItemText primary={s.ticker} secondary={s.companyName} />
        <div className={classes.price}>98.12</div>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>{" "}
      </ListItem>
    );
  });
  return (
    <div className={classes.root}>
      <List component="nav">{stockListItems}</List>
    </div>
  );
}

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockList);
