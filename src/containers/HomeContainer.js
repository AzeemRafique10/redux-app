import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../Services/Action/action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  RemoveToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
