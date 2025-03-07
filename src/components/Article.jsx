import PropTypes from "prop-types"; 
function Article({ title, body }) {
    //  title, body
    return (
      <article>
        <h2>{title}</h2>
        {body}
      </article>
    );
  }
  Article.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
  };
  export default Article;