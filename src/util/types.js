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
  component: PropTypes.any.isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export const layoutTypes = {
  children: PropTypes.node.isRequired,
};

export const providerTypes = {
  children: PropTypes.node.isRequired,
};

export const pageNavItemTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  external: PropTypes.bool,
};
export const emptyTypes = {
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  cta: PropTypes.string.isRequired,
};

export const errorStateTypes = {
  message: PropTypes.string.isRequired,
};

export const modalTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export const formInputTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
