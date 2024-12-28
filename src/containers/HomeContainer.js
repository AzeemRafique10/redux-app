import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Action/action";

const mapStateToProps = (state) => ({
  cardData: state
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
