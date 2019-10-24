import PropTypes from 'prop-types';

export const textTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

export const seoTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
};

export const blogTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export const buttonTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  background: PropTypes.string,
  fullwidth: PropTypes.bool,
  id: PropTypes.string,
};

export const userTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export const homeTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(userTypes)).isRequired,
};

export const privateRouteTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export const layoutTypes = {
  children: PropTypes.node.isRequired,
};
