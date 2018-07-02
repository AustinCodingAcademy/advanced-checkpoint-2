import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  card: {
    width: "50%",
    minWidth: 275,
  },
  cardActions: {
    justifyContent: "center"
  },
  form: {
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class CreateStock extends React.Component {
  state = {
    ticker: "",
    companyName: "",
    sector: "",
    annualDividend: "",
    averageCost: ""
  };

  sectors = [
    {
      value: "Technology",
      label: "Technology",
    },
    {
      value: "Industrials",
      label: "Industrials",
    },
    {
      value: "Materials",
      label: "Materials",
    },
    {
      value: "Energy",
      label: "Engery",
    },
    {
      value: "Health Care",
      label: "Health Care",
    },
    {
      value: "Financials",
      label: "Financials",
    },
    {
      value: "Consumer Staples",
      label: "Consumer Staples",
    },
    {
      value: "Consumer Discretionary",
      label: "Consumer Discretionary",
    },
    {
      value: "Utilities",
      label: "Utilities",
    },
    {
      value: "Real Estate",
      label: "Real Estate",
    },
  ];

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  clickHandler = (event) => {
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              className={classes.textField}
              fullWidth
              label="Ticker"
              onChange={this.handleChange("ticker")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className={classes.textField}
              fullWidth
              label="Company Name"
              onChange={this.handleChange("companyName")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="select-sector"
              select
              label="Sector"
              className={classes.textField}
              fullWidth
              value={this.state.sector}
              onChange={this.handleChange("sector")}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              {this.sectors.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="averageCost"
              label="Avg Cost Per Share"
              value={this.state.averageCost}
              onChange={this.handleChange("averageCost")}
              type="number"
              className={classes.textField}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="annualDividend"
              label="Annual Dividend"
              value={this.state.annualDividend}
              onChange={this.handleChange("annualDividend")}
              type="number"
              className={classes.textField}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </form>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.clickHandler}
          >
            Save
          </Button>
          <Button variant="contained" className={classes.button} component={Link} to={"/"}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    );
  }
}

CreateStock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateStock);
