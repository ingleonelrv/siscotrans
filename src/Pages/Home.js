import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

// import Scream from "../components/scream/Scream";
// import Profile from "../components/profile/Profile";
// import ScreamSkeleton from "../util/ScreamSkeleton";
//redux
import { connect } from "react-redux";
// import { getScreams } from "../redux/actions/dataActions";
class Home extends Component {
  componentDidMount = () => {
    // this.props.getScreams();
  };
  render() {
    // const { screams, loading } = this.props.data;
    // let recentScreamMarkup = !loading ? (
    //   screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    // ) : (
    //   <ScreamSkeleton />
    // );
    return (
      <Grid container spacing={10}>
        <Grid item sm={4} xs={12}>
          {/* {recentScreamMarkup} */}
        </Grid>
        <Grid item sm={12} xs={12}>
          {/* <Profile /> */}
        </Grid>
      </Grid>
    );
  }
}
Home.propTypes = {
  data: PropTypes.object.isRequired
  // getScreams: PropTypes.func.isRequired
};
const mapStateToProps = ({ data }) => ({ data });
export default connect(
  mapStateToProps
  // { getScreams }
)(Home);
